import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Title = () => {
  const [keyword, setKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword.trim()) return;
    navigate('/search', { state: { keyword } });
  };

  return (
    <div style={{ width: '1350px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* 배너, 글 */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ margin: 0 }}>
            <img src="/logo.svg" alt="로고" style={{ height: '49px' }} />
          </h1>
          <p
            style={{
              color: '#254D72',
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '30px 0',
            }}
          >
            맞춤형 학습 관리를 지원하는<br />
            미래형 AI 코스웨어, AI 클래스
          </p>

          {/* 검색창 */}
          <input
            type="text"
            placeholder="어떤 강의를 찾으시나요?"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            style={{
              border: isFocused ? '2px solid #49ACB5' : '2px solid #6FB4D2',
              borderRadius: '22px',
              padding: '18px 30px',
              fontSize: '15px',
              color: '#535455',
              fontWeight: 'bold',
              width: '77%',
              maxWidth: '640px',
              transition: 'border 0.3s',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
