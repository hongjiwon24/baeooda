import { Link } from 'react-router-dom'
import React, { useState } from 'react'

// 카테고리 배열
const categories = ['IT·디지털', '비즈니스·경제', '생활·실무', '예술·교양']

// 강의 카드 데이터 예시
const courseCards = {
  'IT·디지털': [
    {
      title: '프론트엔드',
      desc: '초보자도 할 수 있는\nUX/UI 디자인 프론트엔드',
      image: '/images/best1.jpg',
      info: { level: '초급', day: '60일', time: '1년' },
    },
    {
      title: '풀스택',
      desc: '이젠 알 수 있다,\n풀스택 딥러닝',
      image: '/images/best2.jpg',
      info: { level: '고급', day: '150일', time: '1년' }
    },
    {
      title: '사진/영상',
      desc: '추억을 남겨요.\n사진을 남겨요',
      image: '/images/best3.jpg',
      info: { level: '초급', day: '14일', time: '1년' }
    },
    {
      title: '풀스택',
      desc: '이젠 알 수 있다,\n풀스택 딥러닝',
      image: '/images/best2.jpg',
      info: { level: '고급', day: '150일', time: '1년' }
    },
    {
      title: '사진/영상',
      desc: '추억을 남겨요.\n사진을 남겨요',
      image: '/images/best3.jpg',
      info: { level: '초급', day: '14일', time: '1년' }
    },
  ],
  '비즈니스·경제': [
    {
      title: '마케팅 입문',
      desc: '성공을 위한 첫걸음\n마케팅 A to Z',
      image: '/images/best1.jpg',
      info: { level: '중급', day: '70일', time: '1년' }
    },
    {
      title: '재무관리',
      desc: '회계부터 투자까지\n기초 재무 실무',
      image: '/images/best2.jpg',
      info: { level: '고급', day: '50일', time: '1년' }
    },
    {
      title: '창업전략',
      desc: '비즈니스 모델\n실전 창업 전략',
      image: '/images/best3.jpg',
      info: { level: '초급', day: '60일', time: '1년' }
    },
    {
      title: '재무관리',
      desc: '회계부터 투자까지\n기초 재무 실무',
      image: '/images/best2.jpg',
      info: { level: '고급', day: '50일', time: '1년' }
    }, 
    {
      title: '마케팅 입문',
      desc: '성공을 위한 첫걸음\n마케팅 A to Z',
      image: '/images/best1.jpg',
      info: { level: '중급', day: '70일', time: '1년' }
    },
  ],
  '생활·실무': [
    {
      title: '컴퓨터 활용',
      desc: '문서작성부터 데이터분석까지\n실무에 바로 쓰는 팁',
      image: '/images/best1.jpg',
      info: { level: '중급', day: '45일', time: '1년' }
    },
    {
      title: '자격증 준비',
      desc: '자격증 따는 실전 공부법',
      image: '/images/best2.jpg',
      info: { level: '초급', day: '20일', time: '1년' }
    },
    {
      title: '업무 자동화',
      desc: '효율적인 일처리\n업무 자동화',
      image: '/images/best3.jpg',
      info: { level: '고급', day: '40일', time: '1년' }
    },
    {
      title: '자격증 준비',
      desc: '자격증 따는 실전 공부법',
      image: '/images/best2.jpg',
      info: { level: '초급', day: '20일', time: '1년' }
    },
    {
      title: '컴퓨터 활용',
      desc: '문서작성부터 데이터분석까지\n실무에 바로 쓰는 팁',
      image: '/images/best1.jpg',
      info: { level: '중급', day: '45일', time: '1년' }
    },
    
  ],
  '예술·교양': [
    {
      title: '글쓰기',
      desc: '나만의 생각을 기록하기\n감성 글쓰기',
      image: '/images/best1.jpg',
      info: { level: '초급', day: '10일', time: '1년' }
    },
    {
      title: '음악',
      desc: '음악의 기초부터\n나만의 연주까지',
      image: '/images/best2.jpg',
      info: { level: '중급', day: '20일', time: '1년' }
    },
    {
      title: '캘리그라피',
      desc: '손글씨로 전하는 감성',
      image: '/images/best3.jpg',
      info: { level: '초급', day: '5일', time: '1년' }
    },
    {
      title: '글쓰기',
      desc: '나만의 생각을 기록하기\n감성 글쓰기',
      image: '/images/best1.jpg',
      info: { level: '초급', day: '10일', time: '1년' }
    },
    {
      title: '음악',
      desc: '음악의 기초부터\n나만의 연주까지',
      image: '/images/best2.jpg',
      info: { level: '중급', day: '20일', time: '1년' }
    },
  ],
}

const BestSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('IT·디지털')

  return (
    <section>
      {/* 타이틀 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        maxWidth: '1350px',
        marginTop: 0, 
        paddingTop: 0, 
        marginBottom: '19px',
      }}>
        <img
        src="/grass.svg"
        alt="grass"
        style={{ width: '25px', height: '25px', marginRight: '4px' }}/>
        <h2>
          <span style={{ color: '#42B2BB', fontWeight: 700 }}>BEST</span>
          <span style={{ color: '#222', fontWeight: 700, marginLeft: 4 }}>강의 모음</span>
        </h2>
      </div>

      {/* 메인 박스 */}
      <div
        style={{
          width: '1350px',
          maxWidth: '1350px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
          minHeight: '290px',
          justifyContent: 'center',
          boxSizing: 'border-box',
          overflow: 'hidden',
          backgroundColor:' rgb(255, 255, 255)'
        }}
      >
        {/* 상단 카테고리탭 */}
        <div style={{
          minWidth: '140px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '5px'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                // width: '120px',
                padding: '10px 20px',
                border: 'none',
                // borderLeft: selectedCategory === cat ? '4px solid #5584B0' : '3px solid transparent',
                background: selectedCategory === cat ?   '#5584B0' : 'white',
                color: selectedCategory === cat ? 'white' : '#254D72',
                fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                fontSize: '16px',
                textAlign: 'center',
                borderRadius: '8px',
                cursor: 'pointer',
                outline: 'none',
                transition: 'color 0.18s, border 0.18s',
                height: '30px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 우측 카드+버튼 */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          gap: '24px',
          minWidth: '0',
        }}>
          {/* 강의 카드들 */}
          <div style={{
            flex: 1,
            display: 'flex',
            gap: '12px',
            maxWidth: '800px',
            justifyContent: 'flex-start'
          }}>
            {courseCards[selectedCategory]?.slice(0, 5).map((item, idx) => ( // 카드 5개씩 나오게
              <Link 
                to={`/courses/${encodeURIComponent(item.title)}`}
                key={idx}
                style={{ textDecoration: 'none' }}
                state={{ desc: item.desc, image: item.image, level: item.info.level, day: item.info.day , time: item.info.time}}
              >
                <div
                  style={{
                    width: '260px',
                    minWidth: '190px',
                    height: '324px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 2px 12px rgba(85,132,176,0.12)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-img')
                    if (bg) bg.style.transform = 'scale(1.08)'
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-img')
                    if (bg) bg.style.transform = 'scale(1)'
                  }}
                >
                  {/* 배경 이미지 레이어 */}
                  <div
                    className="bg-img"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.4s ease',
                      zIndex: 1,
                    }}
                  />
                  
                  {/* 텍스트 오버레이 */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    padding: '16px 16px 12px 16px',
                    background: 'linear-gradient(0deg, rgba(62, 62, 62, 0.31) 75%, rgba(68, 68, 68, 0.09) 100%)',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      fontWeight: 500,
                      fontSize: '12px',
                      marginBottom: '13px'
                    }}>{item.title}</div>
                    <div style={{
                      whiteSpace: 'pre-line',
                      fontSize: '16px',
                      lineHeight: 1.4,
                      letterSpacing: '-0.3px',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSection
