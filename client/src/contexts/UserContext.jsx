import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 🔹 우선 로컬에 저장된 유저 정보 반영 (에러 방지 포함)
    try {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && typeof parsedUser === 'object') {
          setUser(parsedUser);
        }
      }
    } catch (err) {
      console.error('❌ 로컬 유저 정보 파싱 실패:', err);
      localStorage.removeItem('loggedInUser');
    }

    // 🔹 백엔드에 토큰 유효성 확인 요청
    const restoreUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
        localStorage.setItem('loggedInUser', JSON.stringify(res.data.user));
      } catch (err) {
        console.error('❌ 사용자 정보 복원 실패:', err.response?.data || err.message);
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        setUser(null);
      }
    };

    restoreUser();
  }, []);

  const login = ({ token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
