import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

 const NaverRedirect = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const hasCalled = useRef(false); // ✅ 리렌더링해도 유지됨

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    const fetchNaverUser = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const state = params.get("state");

      if (!code || !state) {
        alert("code 또는 state가 없습니다.");
        navigate("/");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/oauth/naver", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ code, state }),
        });

        const text = await res.text();
        try {
          const data = JSON.parse(text);
          if (data.success) {
            login(data.user);
            alert(`${data.user.nickname}님, 환영합니다`);
            navigate("/");
          } else {
            alert("❌ 네이버 로그인 실패: " + data.message);
            navigate("/");
          }
        } catch (jsonErr) {
          console.error("❌ JSON 파싱 실패:", text);
          alert("❌ 네이버 로그인 실패: 서버 응답 오류");
          navigate("/");
        }
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
