import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const NaverRedirect = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const hasCalled = useRef(false);

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    const fetchNaverUser = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const state = params.get("state");

      if (!code || !state) {
        alert("❌ code 또는 state 없음");
        navigate("/");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/oauth/naver", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, state }),
        });

        const data = await res.json();

        if (!data.token || !data.user) {
          alert("❌ 사용자 정보 없음");
          navigate("/");
          return;
        }

        login(data.user, data.token); // ✅ 핵심 수정
        alert(`${data.user.nickname || data.user.username}님, 환영합니다`);
        navigate("/");
      } catch (err) {
        alert("❌ 네이버 로그인 실패: " + err.message);
        navigate("/");
      }
    };

    fetchNaverUser();
  }, [login, navigate]);

  return <div>네이버 로그인 처리 중...</div>;
};

export default NaverRedirect;
