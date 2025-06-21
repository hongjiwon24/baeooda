import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

// ✅ 개발 모드인지 판단
const isDev = import.meta.env.MODE === 'development';

// ✅ SNS 로그인 URL 정의
const KAKAO_CLIENT_ID = '4417287a95539d2c9a159c0ce8dccb3d';
const KAKAO_REDIRECT_URI = 'http://localhost:5173/oauth/kakao';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code${isDev ? '&prompt=login' : ''}`;

const NAVER_CLIENT_ID = 'htSMbYBIYhrqb5ng17C1';
const NAVER_REDIRECT_URI = 'http://localhost:5173/oauth/naver';
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&response_type=code&state=naver${isDev ? '&auth_type=reauthenticate' : ''}`;

const GOOGLE_CLIENT_ID = '267661652702-tuf4qtil6sfbad9lobr1b2rlr5eq0g58.apps.googleusercontent.com';
const GOOGLE_REDIRECT_URI = 'http://localhost:5173/oauth/google';
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=profile email&prompt=consent${isDev ? '%20select_account' : ''}&access_type=offline`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        { username, password },
        { withCredentials: true }
      );

      const user = res.data;
      if (!user.username) {
        alert('❌ username이 없습니다.');
        return;
      }

      login(user);
      alert(` ${user.username}님, 환영합니다`);
      navigate('/');
    } catch (err) {
      console.error('❌', err);
      if (err.response) {
        const msg = err.response.data?.message || err.response.data?.error || '서버 오류';
        alert(`❌ ${msg}`);
      } else {
        alert('❌ 서버 연결 실패');
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div
        style={{
          width: '370px',
          padding: '46px 52px 21px',
          backgroundColor: '#fff',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0 0 27px 0',
          textAlign: 'initial',
          
        }}>
          로그인
        </h2>

        <div style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', flex: '1' }}>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디"
                style={{
                    width: '100%',
                    padding: '12px 17px',
                    border: 'none',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    borderRadius: '8px 8px 0px 0px'
                }}
                />

                <div style={{ height: '1px', backgroundColor: '#ddd' }} />

                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                style={{
                    width: '100%',
                    padding: '12px 17px',
                    border: 'none',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    borderRadius: '0px 0px 8px 8px',
                    marginTop: '1px'
                }}
                />
            </div>
            <button
            onClick={handleLogin}
            style={{
                width: '78px',
                padding: '13px',
                borderRadius: '8px',
                backgroundColor: '#D45757',
                color: 'white',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                height: '86px',
                fontSize: '15px'
            }}
            >
            로그인
            </button>
        </div>
          <Link to="/auth?mode=find-id" style={{
            color: '#737882',
            fontSize: '13px',
            fontWeight: 'bold',
            display: 'block',
            padding: '2px 0  0 15px',
            borderRadius: '4px',
            marginTop: '8px',
            textAlign: 'initial',
            
          }}>
            아이디/비밀번호 찾기
          </Link>

        <div style={styles.dividerContainer}>
        <div style={styles.line} />
        <span style={styles.dividerText}>SNS 간편 로그인</span>
        <div style={styles.line} />
        </div>

        {/* ✅ SNS 로그인 버튼 영역 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <button onClick={() => window.location.href = KAKAO_AUTH_URL} style={{ background: '#F0F0F0', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', alignItems: 'center', gap: '17px', width: '100%', justifyContent:'center', height: '55px', borderRadius: '5px', fontSize: '15px' }}>
            <img src="/kakao.png" alt="카카오 로그인" style={{ width: '38px', height: '38px' }} />
            <p style={{
                width: '173px'
            }}>
                카카오 계정으로 로그인</p>
          </button>
          <button onClick={() => window.location.href = NAVER_AUTH_URL} style={{ background: '#F0F0F0', border: 'none', padding: 0, cursor: 'pointer',display: 'flex', alignItems: 'center', alignItems: 'center', gap: '17px', width: '100%', justifyContent:'center', height: '55px', fontSize: '15px' }}>
            <img src="/naver.png" alt="네이버 로그인" style={{ width: '38px', height: '38px' }} />
            <p style={{
                width: '173px'
            }}>
                네이버 계정으로 로그인</p>
          </button>
          <button onClick={() => window.location.href = GOOGLE_AUTH_URL} style={{ background: '#F0F0F0', border: 'none', padding: 0, cursor: 'pointer',display: 'flex', alignItems: 'center', alignItems: 'center', gap: '17px', width: '100%', justifyContent:'center', height: '55px', fontSize: '15px'  }}>
            <img src="/google.png" alt="구글 로그인" style={{ width: '33px', height: '33px' }} />
            <p style={{
                width: '173px'
            }}>Google 계정으로 로그인</p>
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
            아직도 배우다 회원이 아니신가요?
            </p> 
            <Link to="/auth?mode=terms" style={{
            color: 'rgb(106, 109, 117)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            textDecoration: 'underline'
            }}>
            회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0 20px'
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#ddd'
  },
  dividerText: {
    padding: '0 10px',
    fontSize: '13px',
    color: '#666',
    whiteSpace: 'nowrap'
  }
};