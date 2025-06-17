import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* 상단바 왼쪽 - 로고, 메뉴 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px'}}>
        {/* 로고 */}
        <Link to="/">
          <img src="/logo.svg" alt="Logo" style={{ height: '23px' }} />
        </Link>

        {/* 메뉴 */}
        <nav>
          <ul style={{ display: 'flex', alignItems: 'center', justifyContent:'center', listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Link
                to="/event"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '12px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                🎉오픈특가
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '12px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                🌊여름특가10만원
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '12px',
                  textDecoration: 'none',
                }}
              >
                베스트
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '12px',
                  textDecoration: 'none',
                }}
              >
                신규
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '12px',
                  textDecoration: 'none',
                }}
              >
                오픈예정
              </Link>
            </li>
          </ul>
        </nav>
        </div>


        {/* 로그인/회원가입 */}
        <AuthLinks>
          <StyledLink to="/login">로그인</StyledLink>
          <StyledLink to="/Signup">회원가입</StyledLink>
        </AuthLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: calc(100vw - 17px); // 스크롤바 보정
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 1001;
  border-bottom: 1px solid #eee;
`;

const HeaderContent = styled.div`
  height: 58px;
  max-width: 1350px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default HomeHeader;
