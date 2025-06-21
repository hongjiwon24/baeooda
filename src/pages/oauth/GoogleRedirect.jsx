import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';

const GoogleRedirect = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const executed = useRef(false);

  useEffect(() => {
    if (executed.current) return;
    executed.current = true;

    const code = new URL(window.location.href).searchParams.get('code');
    if (!code) {
      alert('❌ 인가 코드 없음');
      navigate('/login');
      return;
    }

    const fetchGoogleUser = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/oauth/google',
          { code }, // ✅ code를 body로 보냄
          { withCredentials: true }
        );

        const { user } = res.data;
        if (!user?.nickname) {
          alert('❌ 사용자 정보 없음');
          navigate('/login');
          return;
        }

        login(user);
        alert(`${user.nickname}님, 환영합니다`);
        navigate('/');
      } catch (err) {
        console.error('❌ 구글 로그인 실패:', err.response?.data || err.message);
        alert('❌ 구글 로그인 실패');
        navigate('/login');
      }
    };

    fetchGoogleUser();
  }, [login, navigate]);

  return <div>구글 로그인 처리 중...</div>;
};

export default GoogleRedirect;
