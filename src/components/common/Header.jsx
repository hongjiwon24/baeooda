import React, { useState } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import allCourses from '../../data/allCourses';


// 대분류 → URL용 slug
const mainSlugMap = {
  'IT·디지털': 'it',
  '비즈니스·경제': 'biz',
  '생활·실무': 'life',
  '예술·교양': 'art',
};

const Header = () => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);

  // 카테고리 클릭 시 slug 기반 경로로 이동
  const handleMainCategoryClick = (mainCategory) => {
    const subList = allCourses[mainCategory];
    if (!subList || subList.length === 0) return;

    const mainSlug = mainSlugMap[mainCategory];
    const firstSubSlug = subList[0].slug;

    navigate(`/courses/${mainSlug}/${firstSubSlug}`);
  };

  return (
    <header
      style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        marginLeft: '-50vw',
        backgroundColor: '#fff',
        zIndex: 1000,
        paddingTop: '10px',
      }}
    >
      {/* 상단 메뉴 */}
      <div
        style={{
          maxWidth: '1350px',
          margin: '5px auto',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px',
        }}
      >
        {/* 로고 & 검색 */}
        <div
          style={{
            flex: '1',
            minWidth: '300px',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          {/* 로고 */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1
              style={{
                color: '#5094B4',
                fontSize: '40px',
                fontWeight: 'bold',
                margin: '0',
                lineHeight: '1',
              }}
            >
              <img
                src="/logo.svg"
                alt="Baeooda 로고"
                style={{ height: '32px' }}
              />
            </h1>
          </Link>

          {/* 검색창 + 버튼 */}
          <SearchWrapper $focused={isFocused}>
            <StyledInput
              type="text"
              placeholder="어떤 강의를 찾으시나요?"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                marginLeft: '8px',
                cursor: 'pointer',
              }}
              aria-label="검색"
              onClick={() => {
                console.log('검색 버튼 클릭됨');
              }}
            >
              <img
                src="/icons/search.svg"
                alt="검색"
                style={{
                  width: '18px',
                  height: '18px',
                  objectFit: 'contain',
                }}
              />
            </button>
          </SearchWrapper>

        </div>


        {/* 장바구니 & 찜 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '28px',
            padding: '0 50px',
            fontWeight: 'bold',
            color: 'rgb(67, 175, 185)',
            height: '48px',
          }}
        >
          <Link
            to="/cart"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgb(67, 175, 185)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgb(39, 122, 129)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgb(67, 175, 185)';
            }}
          >
            <img
              src="/icons/cart.svg"
              alt="장바구니"
              style={{ width: '27px', height: '27px', verticalAlign: 'middle' }}
            />
          </Link>

          <Link
            to="/login"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgb(67, 175, 185)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgb(39, 122, 129)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgb(67, 175, 185)';
            }}
          >
            <img
              src="/icons/heart.svg"
              alt="찜하기"
              style={{ width: '27px', height: '27px', verticalAlign: 'middle' }}
            />
          </Link>

          <Link
            to="/login"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgb(67, 175, 185)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgb(39, 122, 129)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgb(67, 175, 185)';
            }}
          >
            <img
              src="/icons/heart.svg"
              alt="찜하기"
              style={{ width: '27px', height: '27px', verticalAlign: 'middle' }}
            />
          </Link>

        </div>
      </div>

      {/* 하단 카테고리 */}
      <nav style={{ width: '100%', height: '57px', backgroundColor: '#49ACB5' }}>
        <ul
          style={{
            maxWidth: '1350px',
            margin: '0 auto',
            padding: '0',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            listStyle: 'none',
            gap: '30px',
            boxSizing: 'border-box',
          }}
        >
          {Object.keys(allCourses).map((mainCategory) => (
            <li key={mainCategory}>
              <button
                onClick={() => handleMainCategoryClick(mainCategory)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: '550',
                  cursor: 'pointer',
                }}
              >
                {mainCategory}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// 검색창 클릭시 우측으로 이동
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 22px;
  padding-right: 12px;
  height: 40px;
  min-width: 200px;
  transition: all 0.4s ease;
  transform: ${({ $focused }) => ($focused ? 'translateX(250px)' : 'translateX(0)')}; /* 이동 */
`;
const StyledInput = styled.input`
  all: unset;
  width: 200px;
  font-size: 13px;
  padding: 0 0 0 25px;
  transition: width 0.35s ease;
  &::placeholder {
    color: #949494;
  }
  &:focus {
    width: 400px;
  }
`;

export default Header;
