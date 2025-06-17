import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const keywords = [
  { text: '프론트엔드', path: '/search?keyword=프론트엔드' },
  { text: '마케팅', path: '/search?keyword=마케팅' },
  { text: '사주', path: '/search?keyword=사주' },
  { text: '글쓰기', path: '/search?keyword=글쓰기' },
  { text: '자격증 준비', path: '/search?keyword=자격증 준비' },
  { text: '디자인', path: '/search?keyword=디자인' },
  { text: '타로', path: '/search?keyword=타로' },
];

const Title = () => {
  const [keyword, setKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword.trim()) return;
    navigate('/search', { state: { keyword } });
  };

  return (
    <div style={{ width: '1350px', display: 'flex', justifyContent: 'space-between', }}>
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
          <p
            style={{
              color: 'black',
              fontSize: '34px',
              fontWeight: 'bold',
              margin: '30px 0 31px 20px',
            }}
          >
            취미부터 커리어까지, <br />당신에게 딱 맞는 배움을 만나보세요
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
              marginBottom: '22px',
            }}
          />

          {/* 추천 키워드 버튼 */}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginLeft: '20px', marginBottom: '20px' }}>
            {keywords.map((item, idx) => (
              <button
                key={idx}
                onClick={() => navigate(item.path)}
                style={keywordStyle}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 오른쪽 일러스트 */}
      <div>
        <img src="/public/images/title_img_01.png" alt="타이틀 일러스트"
        style={{ width: '332px', height: '332px' }}
        />
      </div>
    </div>
  );
};

const keywordStyle = {
  backgroundColor: 'rgb(240, 242, 242)',
  border: 'none',
  color: 'rgb(89, 90, 90)',
  fontSize: '14px',
  cursor: 'pointer',
  padding: '10px 15px',
};

export default Title;
