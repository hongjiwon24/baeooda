import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ 개발 모드에서 로그인 정보 강제 초기화
    if (import.meta.env.DEV) {
      localStorage.removeItem('loggedInUser');
    }

    // ✅ 서버 세션 체크 (새로고침 시 로그인 유지)
    const fetchSession = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/check-session', {
          withCredentials: true,
        });
        if (res.data.user) {
          setUser(res.data.user);
          localStorage.setItem('loggedInUser', JSON.stringify(res.data.user)); // 🔁 localStorage 동기화
        } else {
          setUser(null);
          localStorage.removeItem('loggedInUser');
        }
      } catch (err) {
        console.log('세션 없음 or 오류:', err.response?.data || err.message);
        setUser(null);
        localStorage.removeItem('loggedInUser');
      }
    };

    fetchSession();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (err) {
      console.error('서버 로그아웃 실패:', err);
    }

    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
