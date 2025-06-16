import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import allCourses from '../../data/allCourses';
import dummyCourses from '../../data/dummyCourses';

const mainSlugMap = {
  'IT·디지털': 'it',
  '비즈니스·경제': 'biz',
  '생활·실무': 'life',
  '예술·교양': 'art',
};

const Header = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef(null); // 🔹 검색창 외부 감지용
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [recentKeywords, setRecentKeywords] = useState([]);

  // 검색창 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 최근 검색어 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recentKeywords')) || [];
    setRecentKeywords(saved);
  }, []);

  const saveKeyword = (newKeyword) => {
    if (!newKeyword) return;
    const updated = [newKeyword, ...recentKeywords.filter(k => k !== newKeyword)].slice(0, 5);
    setRecentKeywords(updated);
    localStorage.setItem('recentKeywords', JSON.stringify(updated));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    const trimmed = value.trim();
    if (!trimmed) {
      setSuggestions([]);
      return;
    }

    const processedSearchTerm = trimmed.toLowerCase();
    const filteredTitles = dummyCourses
      .filter(course => course.title.toLowerCase().includes(processedSearchTerm))
      .map(course => {
        const regex = new RegExp(`(${processedSearchTerm})`, 'gi');
        return course.title.split(regex).map((part, index) =>
          regex.test(part) ? <HighlightedText key={index}>{part}</HighlightedText> : part
        );
      });

    setSuggestions([...new Set(filteredTitles)].slice(0, 6));
  };

  const handleSearchReset = () => {
    setKeyword('');
    setSuggestions([]);
    setIsFocused(false);
  };

  const handleSearch = (term) => {
    if (!term.trim()) return;
    saveKeyword(term);
    navigate('/search', { state: { keyword: term } });
    handleSearchReset();
  };

  const handleSuggestionClick = (title) => {
    if (typeof title === 'string') {
      handleSearch(title);
    } else {
      const rawText = title.map(t => typeof t === 'string' ? t : t.props?.children || '').join('');
      handleSearch(rawText);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && keyword.trim()) {
      handleSearch(keyword.trim());
    }
  };

  const deleteRecent = (item) => {
    const updated = recentKeywords.filter(k => k !== item);
    setRecentKeywords(updated);
    localStorage.setItem('recentKeywords', JSON.stringify(updated));
  };

  const clearAllRecent = () => {
    setRecentKeywords([]);
    localStorage.removeItem('recentKeywords');
  };

  const handleMainCategoryClick = (mainCategory) => {
    const subList = allCourses[mainCategory];
    if (!subList || subList.length === 0) return;
    const mainSlug = mainSlugMap[mainCategory];
    const firstSubSlug = subList[0].slug;
    navigate(`/courses/${mainSlug}/${firstSubSlug}`);
  };

  return (
    <header style={{ width: '100vw', position: 'relative', left: '50%', marginLeft: '-50vw', backgroundColor: '#fff', zIndex: 1000 }}>
      <div style={{
      maxWidth: '1350px',
      margin: '5px auto',
      padding: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      }}>

      {/* 왼쪽: 로고 + nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        {/* 로고 */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: '#5094B4', fontWeight: 'bold', margin: 0 }}>
            <img src="/logo.svg" alt="Baeooda 로고" style={{ height: '23px' }} />
          </h1>
        </Link>

        {/* 네비게이션 */}
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {Object.keys(allCourses).map((mainCategory) => (
              <li key={mainCategory}>
                <button
                  onClick={() => handleMainCategoryClick(mainCategory)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'black',
                    fontSize: '16px',
                    cursor: 'pointer',
                    padding: '12px',
                  }}
                >
                  {mainCategory}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 오른쪽: 검색창 + 장바구니/찜/로그인 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>

       <div style={{ position: 'relative' }} ref={wrapperRef}>
        {/* 검색창 */}
        <SearchWrapper $focused={isFocused}>
          <img src="/icons/search.svg" alt="검색" style={{ width: '18px', height: '18px', marginLeft: '17px' }} />
          <StyledInput
            type="text"
            placeholder="어떤 강의를 찾으시나요?"
            value={keyword}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onClick={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
          />
          {isFocused && keyword && (
            <ClearButton onClick={handleSearchReset} aria-label="검색어 초기화">×</ClearButton>
          )}
        </SearchWrapper>

        {/* 자동완성 or 최근검색어 */}
        {isFocused && (
          keyword.trim() && suggestions.length > 0 ? (
            <SuggestionBox>
              {suggestions.map((title, idx) => (
                <li key={idx} onMouseDown={() => handleSuggestionClick(title)}>{title}</li>
              ))}
            </SuggestionBox>
          ) : (
            recentKeywords.length > 0 && (
              <RecentBox>
                <div className="top">
                  <span>내가 찾아본</span>
                  <button onMouseDown={clearAllRecent}>전체 삭제</button>
                </div>
                <ul>
                  {recentKeywords.map((item, idx) => (
                    <li key={idx} onMouseDown={() => handleSearch(item)}>
                      <span>{item}</span>
                      <button onMouseDown={(e) => {
                        e.stopPropagation();
                        deleteRecent(item);
                      }}>×</button>
                    </li>
                  ))}
                </ul>
              </RecentBox>
            )
          )
        )}
      </div>

        {/* 장바구니/찜/로그인 */}
          {/* <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/heart"><img src="/icons/heart.svg" alt="찜" style={{ width: '25px', height: '25px' }} /></Link>
            <Link to="/login"><img src="/icons/login.svg" alt="로그인" style={{ width: '23px', height: '23px' }} /></Link>
          </div> */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/heart" style={{ fontSize: '14px', color: 'black', fontWeight: 'normal' }}>로그인</Link>
            <Link to="/login" style={{ fontSize: '14px', color: 'black', fontWeight: 'normal' }}>회원가입</Link>
          </div>

        </div>
      </div>
    </header>
  );
};

// 스타일
const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 22px;
  padding-right: 12px;
  height: 40px;
  width: 275px;
  min-width: 180px;
  overflow: visible;
`;

const StyledInput = styled.input`
  all: unset;
  flex: 1;
  width: 200px;
  font-size: 13px;
  padding: 0 0 0 20px;
  &::placeholder {
    color: #949494;
  }
`;

const ClearButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  margin-right: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #aaa;
`;


const SuggestionBox = styled.ul`
  position: absolute;
  top: 48px;
  left: -21px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 6px 0;
  width: 315px;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  li {
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background-color: #f1f5f9;
    }
  }
`;

const RecentBox = styled.div`
  position: absolute;
  top: 48px;
  left: -21px;
  width: 315px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .top {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    font-size: 14px;
    margin-bottom: 4px;

    button {
      background: none;
      border: none;
      font-size: 12px;
      color: #999;
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      font-size: 14px;
      cursor: pointer;

      span {
        flex: 1;
      }

      button {
        background: none;
        border: none;
        font-size: 14px;
        color: #bbb;
        cursor: pointer;
        margin-left: 8px;
      }

      &:hover {
        background-color: #f1f5f9;
      }
    }
  }
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: rgb(247, 111, 21);
`;

export default Header;
