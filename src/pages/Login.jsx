import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

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

const LoginForm = () => {
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
      margin: '220px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div
        style={{
          width: '276px',
          padding: '46px 52px 21px',
          borderRadius: '16px',
          border: '1px solid #eee',
          backgroundColor: '#fff',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          boxShadow: '0 2px 6px 0 rgba(0,0,0,.06)',
        }}
      >
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0 0 27px 0'
        }}>
          로그인
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디"
            style={{
              width: '100%',
              padding: '12px 17px',
              border: '1px solid rgb(221, 221, 221)',
              fontSize: '14px',
              boxSizing: 'border-box',
              borderRadius: '4px'
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            style={{
              width: '100%',
              padding: '12px 17px',
              border: '1px solid rgb(221, 221, 221)',
              fontSize: '14px',
              boxSizing: 'border-box',
              borderRadius: '4px'
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '13px',
            borderRadius: '4px',
            backgroundColor: '#4C779F',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            marginTop: '25px',
            height: '45px'
          }}
        >
          로그인
        </button>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '0 38px'
        }}>
          <Link to="/signup" style={{
            color: 'rgb(150, 150, 150)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            display: 'block',
            padding: '3px 0',
            borderRadius: '4px',
            marginTop: '8px',
            width: '74px'
          }}>
            회원가입
          </Link>
          <span style={{
            color: 'rgb(212, 212, 212)',
            fontSize: '16px',
            padding: '3px 0',
            marginTop: '8px',
          }}>
            ㅣ
          </span>
          <Link to="/find-id" style={{
            color: 'rgb(150, 150, 150)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            display: 'block',
            padding: '3px 0',
            borderRadius: '4px',
            marginTop: '8px',
          }}>
            아이디 찾기
          </Link>
        </div>

        <p style={{
          color: 'rgb(150, 150, 150)',
          fontSize: '12px',
          marginTop: '35px'
        }}>
          SNS 계정을 통해 빠르게 로그인 하기
        </p>

        {/* ✅ SNS 로그인 버튼 영역 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '14px',
          marginTop: '24px',
          alignItems: 'center'
        }}>
          <button onClick={() => window.location.href = KAKAO_AUTH_URL} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <img src="/kakao.png" alt="카카오 로그인" style={{ width: '48px', height: '48px' }} />
          </button>
          <button onClick={() => window.location.href = NAVER_AUTH_URL} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <img src="/naver.svg" alt="네이버 로그인" style={{ width: '48px', height: '48px' }} />
          </button>
          <button onClick={() => window.location.href = GOOGLE_AUTH_URL} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <img src="/google.png" alt="구글 로그인" style={{ width: '42px', height: '42px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
