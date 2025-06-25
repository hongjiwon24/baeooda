import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../../contexts/UserContext'; // 경로는 프로젝트 구조에 맞게 조정

const HomeHeader = () => {
  const { user, logout } = useUser();
   console.log('🟢 user.profileImage:', user?.profileImage);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        {/* 왼쪽 - 로고와 메뉴 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <Link to="/">
            <img src="/logo.svg" alt="Logo" style={{ height: '23px' }} />
          </Link>
          <nav>
            <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
              {['🎉오픈특가', '베스트', '신규', '오픈예정'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="/event"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'black',
                      fontSize: '16px',
                      cursor: 'pointer',
                      padding: '12px',
                      fontWeight: idx < 1 ? 'bold' : 'normal',
                      textDecoration: 'none',
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 오른쪽 - 로그인/회원가입 또는 프로필 */}
        <AuthLinks>
          {user ? (
            <>
              <Link to="/favorite" style={{ fontSize: '14px', color: 'black' }}>찜하기</Link>
              <div ref={profileRef} style={{ position: 'relative' }}>
                <button
                  type="button" 
                  onClick={() => setShowProfileMenu(prev => !prev)}
                  style={{
                    width: '36px',
                    height: '36px',
                    border: 'none',
                    backgroundColor: '#ddd',
                    backgroundImage: `url(${user.profileImage})`, 
                    backgroundSize: 'contain',                     
                    backgroundPosition: 'center',                
                    backgroundRepeat: 'no-repeat',                
                    cursor: 'pointer',
                    padding: 0,
                    backgroundColor: '#fff'
                  }}
                />
                {showProfileMenu && (
                  <div style={{
                    position: 'absolute',
                    top: '48px',
                    right: 0,
                    width: '220px',
                    background: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '12px',
                    zIndex: 999
                  }}>
                    <div style={{ paddingBottom: '8px', borderBottom: '1px solid #ddd', marginBottom: '8px', marginLeft: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '15px' }}> {user.nickname || user.name || user.username}님</strong>
                      <span style={{ fontSize: '13px', color: '#666' }}>{user.email}</span>
                    </div>
                    <Link to="/cart" style={menuItemStyle}>장바구니</Link>
                    <Link to="/recent" style={menuItemStyle}>지금 듣고있는 강의</Link>
                    <Link to="/profile" style={menuItemStyle}>마이페이지</Link>
                    <button onClick={handleLogout} style={{
                      ...menuItemStyle,
                      border: 'none',
                      background: 'none',
                      color: '#f54343',
                      textAlign: 'left',
                      width: '100%'
                    }}>로그아웃</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
            <div style={{ display: 'flex', gap: '10px' }}>
              <StyledLink to="/auth?mode=login" 로그인 style={{ fontSize: '14px', color: 'black', padding: '5px 15px', textDecoration: 'none' }}>로그인</StyledLink>
              <StyledLink to="/auth?mode=terms" style={{
                  fontSize: '14px',
                  color: 'black',
                  background: 'black',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  textDecoration: 'none'
                  }}>
                  회원가입
                </StyledLink>
              </div>
            </>
          )}
        </AuthLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100vw; // 스크롤바 보정
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
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: black;
  text-decoration: none;
  padding: 5px 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const menuItemStyle = {
  display: 'block',
  padding: '8px 12px',
  fontSize: '14px',
  color: '#333',
  textDecoration: 'none',
  cursor: 'pointer'
};

export default HomeHeader;
