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
  const wrapperRef = useRef(null);
  const dropdownRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [recentKeywords, setRecentKeywords] = useState([]);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const isFocused = activeOverlay === 'search';
  const isOpen = activeOverlay === 'category';

  useEffect(() => {
    const width = window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(width);
  }, []);

  useEffect(() => {
    if (activeOverlay) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [activeOverlay, scrollbarWidth]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        wrapperRef.current && !wrapperRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setActiveOverlay(null);
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    setActiveOverlay(null);
  };

  const handleSearch = (term) => {
    if (!term.trim()) return;
    saveKeyword(term);
    navigate('/search', { state: { keyword: term } });
    handleSearchReset();
  };

  const handleSuggestionClick = (title) => {
    const rawText = typeof title === 'string'
      ? title
      : title.map(t => typeof t === 'string' ? t : t.props?.children || '').join('');
    handleSearch(rawText);
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

  const handleSubClick = (mainCategory, sub) => {
    const mainSlug = mainSlugMap[mainCategory];
    const subSlug = sub.slug;
    setActiveOverlay(null);
    setTimeout(() => {
      navigate(`/courses/${mainSlug}/${subSlug}`);
    }, 100);
  };

  const handleEventClick = () => {
    navigate('/event');
  };

  return (
    <>
      {activeOverlay && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setActiveOverlay(null);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `calc(100vw - ${scrollbarWidth}px)`,
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
          }}
        />
      )}

      <header style={{
        width: `calc(100vw - ${scrollbarWidth}px)`,
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: '#fff',
        zIndex: 1001
      }}>
        <div style={{ maxWidth: '1350px', margin: '5px auto', padding: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* 로고, nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <Link to="/">
              <img src="/logo.svg" alt="Logo" style={{ height: '23px' }} />
            </Link>
            <nav>
              <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
                <li ref={dropdownRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setActiveOverlay(activeOverlay === 'category' ? null : 'category')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'black',
                      fontSize: '16px',
                      cursor: 'pointer',
                      padding: '12px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                    카테고리 <img src="/icons/menu.svg" alt="Menu" style={{ height: '11px', width: '11px' }} />
                  </button>
                </li>
                <li>
                  <Link onClick={handleEventClick} style={{
                    background: 'none',
                    border: 'none',
                    color: 'black',
                    fontSize: '16px',
                    cursor: 'pointer',
                    padding: '12px',
                    fontWeight: 'bold'
                  }}>
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

          {/* 검색창 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
            <div style={{ position: 'relative', zIndex: 1002 }} ref={wrapperRef}>
              <SearchWrapper>
                <img src="/icons/search.svg" alt="검색" style={{ width: '18px', height: '18px', marginLeft: '17px' }} />
                <StyledInput
                  type="text"
                  placeholder="어느 강의를 찾으시나요?"
                  value={keyword}
                  onChange={handleInputChange}
                  onFocus={() => setActiveOverlay('search')}
                  onClick={() => setActiveOverlay('search')}
                  onKeyDown={handleKeyDown}
                />
                {isFocused && keyword && (
                  <ClearButton onClick={handleSearchReset} aria-label="검색어 초기화">&times;</ClearButton>
                )}
              </SearchWrapper>
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
                            <button onMouseDown={(e) => { e.stopPropagation(); deleteRecent(item); }}>&times;</button>
                          </li>
                        ))}
                      </ul>
                    </RecentBox>
                  )
                )
              )}
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/login" style={{ fontSize: '14px', color: 'black' }}>로그인</Link>
              <Link to="/Signup" style={{ fontSize: '14px', color: 'black' }}>회원가입</Link>
            </div>
          </div>
        </div>
      </header>
      

      {/* 드롭 박스 */}
      <DropdownWrapper isOpen={isOpen} style={{ width: `calc(100vw - ${scrollbarWidth}px)` }}>
        <DropdownInner>
          {Object.entries(allCourses).map(([mainCategory, subList]) => (
            <div key={mainCategory} style={{ width: '130px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontWeight: 'bold', fontSize: '17px', marginBottom: '10px',
                color: '#222', whiteSpace: 'nowrap', borderBottom: '5px solid #ddd', paddingBottom: '10px'
              }}>
                {mainCategory}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, maxHeight: '180px', overflowY: 'auto' }}>
                {subList.map((sub, idx) => (
                  <SubCategoryItem
                    key={idx}
                    onMouseDown={() => handleSubClick(mainCategory, sub)}
                  >
                    {sub.title}
                  </SubCategoryItem>
                ))}
              </ul>
            </div>
          ))}
        </DropdownInner>
      </DropdownWrapper>
    </>
  );
};

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
  left: -30px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 6px 0;
  width: 315px;
  z-index: 1003;
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
  left: -30px;
  width: 315px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 0;
  z-index: 1003;
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

// 드롭박스 스타일링
const DropdownWrapper = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transition: transform 0.4s ease, opacity 0.4s ease;
  z-index: 1002;
  background-color: white;
  border-top: 1px solid #ededed;
`;

const DropdownInner = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 35px 0 60px 0;
  display: flex;
  gap: 40px;
`;

const SubCategoryItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  padding: 8px 0;
  color: #444;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: #f76f15; /* 원하는 색으로 변경 가능 */
  }
`;


export default Header;
