// 회원가입.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    year: '',
    month: '',
    day: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 데이터:', formData);
    // 여기에 실제 회원가입 로직 추가
  };

  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div style={{
      maxWidth: '400px',
      margin: '80px auto',
      padding: '40px 30px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      fontFamily: 'sans-serif',
      boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>회원가입</h2>

      <form onSubmit={handleSubmit}>
        {/* 이메일 */}
        <input
          type="email"
          name="email"
          placeholder="이메일*"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* 아이디 */}
        <input
          type="text"
          name="username"
          placeholder="아이디*"
          value={formData.username}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* 비밀번호 */}
        <input
          type="password"
          name="password"
          placeholder="비밀번호*"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* 생년월일 */}
        <div style={{ margin: '20px 0 10px', fontSize: '14px', color: '#333' }}>생년월일</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select name="year" value={formData.year} onChange={handleChange} style={selectStyle}>
            <option value="">연도</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select name="month" value={formData.month} onChange={handleChange} style={selectStyle}>
            <option value="">월</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select name="day" value={formData.day} onChange={handleChange} style={selectStyle}>
            <option value="">일</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* 버튼 */}
        <button type="submit"
          style={{
            width: '100%',
            padding: '13px',
            borderRadius: '8px',
            backgroundColor: '#4C779F',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
        }}
        >가입하기</button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
        이미 가입된 계정이 있나요?&nbsp;
        <Link to="/login" style={{ color: '#1a1a1a', fontWeight: 600, textDecoration: 'underline' }}>
          로그인하기
        </Link>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  height: '44px',
  marginBottom: '12px',
  padding: '0 12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  boxSizing: 'border-box',
};

const selectStyle = {
  flex: 1,
  height: '44px',
  padding: '0 8px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const buttonStyle = {
  width: '100%',
  height: '48px',
  background: 'linear-gradient(to right, #4b79a1, #283e51)',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  marginTop: '30px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default SignUp;
