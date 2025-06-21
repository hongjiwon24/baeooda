import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    verificationCode: '',
    username: '', 
    password: '',
    confirmPassword: '',
  });

  const [emailSent, setEmailSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [verificationRequested, setVerificationRequested] = useState(false);
  const [codeSubmitted, setCodeSubmitted] = useState(false);
  const [showDomainList, setShowDomainList] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [emailButtonDisabled, setEmailButtonDisabled] = useState(false);
  const [codeButtonDisabled, setCodeButtonDisabled] = useState(false);

  const emailDomains = ['gmail.com', 'naver.com', 'daum.net', 'kakao.com', 'hanmail.net', 'nate.com'];
  const dropdownRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if ((name === 'confirmPassword' || name === 'password') && formData.confirmPassword) {
      setPasswordMatch(
        name === 'confirmPassword'
          ? value === formData.password
          : formData.confirmPassword === value
      );
    }

    if (name === 'email') {
      setShowDomainList(value.includes('@'));
      setHighlightedIndex(-1);
    }
  };

  const handleDomainSelect = (domain) => {
    const [localPart] = formData.email.split('@');
    const fullEmail = `${localPart}@${domain}`;
    setFormData((prev) => ({ ...prev, email: fullEmail }));
    setShowDomainList(false);
  };

  const handleKeyDown = (e) => {
    if (showDomainList) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % emailDomains.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + emailDomains.length) % emailDomains.length);
      } else if (e.key === 'Enter') {
        if (highlightedIndex >= 0) {
          e.preventDefault();
          handleDomainSelect(emailDomains[highlightedIndex]);
        } else if (formData.email.includes('@') && !verificationRequested) {
          e.preventDefault();
          sendVerification();
        }
      }
    } else if (e.key === 'Enter') {
      if (document.activeElement.name === 'verificationCode') {
        e.preventDefault();
        verifyCode();
      } else if (
        formData.name &&
        formData.email &&
        emailSent &&
        codeVerified &&
        formData.username &&
        formData.password &&
        formData.confirmPassword &&
        passwordMatch
      ) {
        e.preventDefault();
        document.getElementById('submit-btn').click();
      } else if (formData.email.includes('@') && !verificationRequested) {
        e.preventDefault();
        sendVerification();
      }
    }
  };

  const sendVerification = () => {
    if (formData.email.includes('@')) {
      setEmailSent(true);
      setVerificationRequested(true);
      setEmailButtonDisabled(true);
      setTimeout(() => {
        setVerificationRequested(false);
      }, 1000);
    }
  };

  const verifyCode = () => {
    if (formData.verificationCode.trim()) {
      setCodeVerified(true);
      setCodeSubmitted(true);
      setCodeButtonDisabled(true);
      setTimeout(() => {
        setCodeSubmitted(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDomainList(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={{ maxWidth: '320px', margin: '0 auto', fontFamily: 'sans-serif', position: 'relative' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '18px' }}>회원가입</h2>

      <input
        type="text"
        name="name"
        placeholder="이름*"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <div style={{ display: 'flex', gap: '5px', position: 'relative' }}>
        <input
          ref={emailInputRef}
          type="text"
          name="email"
          placeholder="이메일*"
          value={formData.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required
          style={{ ...inputStyle, width: '210px' }}
        />
        <button
          type="button"
          onClick={sendVerification}
          disabled={emailButtonDisabled || !formData.email.includes('@') || verificationRequested}
          style={createButtonStyle(!(formData.email.includes('@') && !emailButtonDisabled && !verificationRequested) ? false : true)}
        >
          인증번호 전송
        </button>
        {showDomainList && (
          <ul ref={dropdownRef} style={dropdownStyle}>
            {emailDomains.map((domain, index) => (
              <li
                key={domain}
                onClick={() => handleDomainSelect(domain)}
                style={{
                  ...dropdownItemStyle,
                  backgroundColor: highlightedIndex === index ? '#eee' : 'transparent',
                }}
              >
                {`${formData.email.split('@')[0]}@${domain}`}
              </li>
            ))}
          </ul>
        )}
      </div>

      {emailSent && (
        <div style={{ display: 'flex', gap: '5px' }}>
          <input
            type="text"
            name="verificationCode"
            placeholder="이메일 인증번호 확인*"
            value={formData.verificationCode}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
            style={{ ...inputStyle, width: '210px' }}
          />
          <button
            type="button"
            onClick={verifyCode}
            disabled={codeButtonDisabled || !formData.verificationCode.trim() || codeSubmitted}
            style={createButtonStyle(!(formData.verificationCode.trim() && !codeButtonDisabled && !codeSubmitted) ? false : true)}
          >
            인증번호 확인
          </button>
        </div>
      )}

      <input
        type="text"
        name="username"
        placeholder="아이디*"
        value={formData.username}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="password"
        name="password"
        placeholder="비밀번호*"
        value={formData.password}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="비밀번호 확인*"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      {formData.confirmPassword && passwordMatch === false && (
        <p style={{ color: '#E45547', fontSize: '13px', margin: '6px 0 0 4px' }}>
          비밀번호와 비밀번호 확인이 일치하지 않습니다.
        </p>
      )}
      {formData.confirmPassword && passwordMatch === true && (
        <p style={{ color: '#4C779F', fontSize: '13px', margin: '6px 0 0 4px' }}>
          비밀번호가 일치합니다.
        </p>
      )}

      <button
        id="submit-btn"
        type="submit"
        style={{ ...baseButtonStyle, backgroundColor: '#d04444', width: '100%', marginTop: '16px' }}
      >
        가입하기
      </button>
          <div style={{
            display: 'flex',
            gap: '6px',
            marginTop: '8px', 
            width: '100%',
            justifyContent: 'center',

            }}>
            <p  style={{
            color: 'rgb(153, 153, 153)',
            fontSize: '13.5px',
            margin: '0  0'
            }}>
            이미 가입된 계정이 있으신가요?
            </p> 
            <Link to="/auth?mode=login" style={{
            color: 'rgb(106, 109, 117)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            textDecoration: 'underline'
            }}>
            로그인
            </Link>
          </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  height: '42px',
  marginBottom: '10px',
  padding: '0 12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  boxSizing: 'border-box',
};

const baseButtonStyle = {
  padding: '12px 0',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  height: '45px',
  cursor: 'pointer',
  width: '100%',
};

const createButtonStyle = (isEnabled) => ({
  ...baseButtonStyle,
  backgroundColor: isEnabled ? '#d04444' : '#ccc',
  cursor: isEnabled ? 'pointer' : 'not-allowed',
});

const dropdownStyle = {
  position: 'absolute',
  top: '44px',
  left: 0,
  width: '210px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '4px',
  zIndex: 10,
  maxHeight: '150px',
  overflowY: 'auto',
  padding: 0,
  margin: 0,
  listStyle: 'none',
};

const dropdownItemStyle = {
  padding: '8px 12px',
  cursor: 'pointer',
  fontSize: '14px',
};

export default SignupForm;
