import { Link } from 'react-router-dom'
import React, { useState } from 'react'

// 카테고리 배열
const categories = ['IT·디지털', '비즈니스·경제', '생활·실무', '예술·교양']

// 강의 카드 데이터 예시
const courseCards = {
  'IT·디지털': [
  {
    tag: ['프론트엔드'],
    title: 'UX/UI 디자인부터 시작하는 프론트엔드',
    desc: '초보자도 할 수 있는\nUX/UI 디자인 프론트엔드',
    image: '/images/best1.jpg',
    info: { level: '초급', day: '60일', time: '1년' },
    price: '₩75,000',
    originalPrice: '₩109,000',
    discount: '31%'
  },
  {
    tag: ['풀스택', '딥러닝'],
    title: '딥러닝 개발, 풀스택으로 함께해요',
    desc: '이젠 알 수 있다,\n풀스택 딥러닝',
    image: '/images/best2.jpg',
    info: { level: '고급', day: '150일', time: '1년' },
    price: '₩139,000',
    originalPrice: '₩189,000',
    discount: '26%'
  },
  {
    tag: ['영상편집'],
    title: '추억을 담는 방법,\n영상편집 입문',
    desc: '추억을 남겨요.\n사진을 남겨요',
    image: '/images/best3.jpg',
    info: { level: '초급', day: '14일', time: '1년' },
    price: '₩19,000',
    originalPrice: '₩29,000',
    discount: '34%'
  },
  {
    tag: ['프로그래밍 툴'],
    title: '노코드부터 시작하는\n개발 자동화',
    desc: '코딩 몰라도 OK,\n자동화 툴 시작하기',
    image: '/images/new8.jpg',
    info: { level: '중급', day: '25일', time: '6개월' },
    price: '₩33,000',
    originalPrice: '₩49,000',
    discount: '33%'
  },
  {
    tag: ['디자인툴'],
    title: '피그마로 배우는\n실전 UX/UI 설계',
    desc: '실무형 디자이너를 위한\n피그마 활용법',
    image: '/images/best5.jpg',
    info: { level: '초급', day: '40일', time: '1년' },
    price: '₩48,000',
    originalPrice: '₩69,000',
    discount: '30%'
  }
],
'비즈니스·경제': [
  {
    tag: ['디지털 마케팅'],
    title: '디지털 마케팅 첫걸음\nSNS부터 광고까지',
    desc: '성공을 위한 첫걸음\n마케팅 A to Z',
    image: '/images/best6.jpg',
    info: { level: '중급', day: '70일', time: '1년' },
    price: '₩89,000',
    originalPrice: '₩120,000',
    discount: '26%'
  },
  {
    tag: ['재무', '회계'],
    title: '숫자로 배우는 비즈니스\n기초 재무관리 입문',
    desc: '회계부터 투자까지\n기초 재무 실무',
    image: '/images/best7.jpg',
    info: { level: '고급', day: '50일', time: '1년' },
    price: '₩76,000',
    originalPrice: '₩109,000',
    discount: '30%'
  },
  {
    tag: ['창업', '비즈니스모델'],
    title: '나만의 사업 시작하기\n실전 창업 전략',
    desc: '비즈니스 모델\n실전 창업 전략',
    image: '/images/best8.jpg',
    info: { level: '초급', day: '60일', time: '1년' },
    price: '₩68,000',
    originalPrice: '₩99,000',
    discount: '31%'
  },
  {
    tag: ['협상', '의사결정'],
    title: '비즈니스 협상의 기술\n상황별 전략 익히기',
    desc: '실전에 바로 적용하는\n의사결정과 협상 스킬',
    image: '/images/best9.jpg',
    info: { level: '중급', day: '40일', time: '6개월' },
    price: '₩55,000',
    originalPrice: '₩82,000',
    discount: '33%'
  },
  {
    tag: ['브랜딩', '전략'],
    title: '브랜드 기획과 성장 전략\n시장 속 나만의 자리 만들기',
    desc: '브랜드의 시작,\n가치를 설계하는 전략',
    image: '/images/best10.jpg',
    info: { level: '중급', day: '75일', time: '1년' },
    price: '₩79,000',
    originalPrice: '₩114,000',
    discount: '31%'
  }
],
'생활·실무': [
  {
    tag: ['오피스', '문서작성'],
    title: '실무 바로 적용!\n오피스 문서 작성 스킬',
    desc: '문서작성부터 데이터분석까지\n실무에 바로 쓰는 팁',
    image: '/images/best11.jpg',
    info: { level: '중급', day: '45일', time: '1년' },
    price: '₩42,000',
    originalPrice: '₩59,000',
    discount: '29%'
  },
  {
    tag: ['자격증', '시험대비'],
    title: '단기 합격을 위한\n자격증 시험 완전 정복',
    desc: '자격증 따는 실전 공부법',
    image: '/images/best12.jpg',
    info: { level: '초급', day: '20일', time: '1년' },
    price: '₩33,000',
    originalPrice: '₩48,000',
    discount: '31%'
  },
  {
    tag: ['자동화', '업무 팁'],
    title: '지루한 업무 끝!\n자동화로 시간 절약하기',
    desc: '효율적인 일처리\n업무 자동화',
    image: '/images/best13.jpg',
    info: { level: '고급', day: '40일', time: '1년' },
    price: '₩58,000',
    originalPrice: '₩84,000',
    discount: '31%'
  },
  {
    tag: ['정리정돈', '생활스킬'],
    title: '하루 10분 정리법\n쾌적한 공간 만들기',
    desc: '정리 습관과 수납 스킬을\n실생활에 바로 적용',
    image: '/images/best14.jpg',
    info: { level: '초급', day: '15일', time: '6개월' },
    price: '₩27,000',
    originalPrice: '₩39,000',
    discount: '31%'
  },
  {
    tag: ['시간관리', '자기계발'],
    title: '몰입과 성과를 높이는\n시간관리 실전 전략',
    desc: '할 일에 우선순위를 두는 법\n시간을 지배하는 루틴 만들기',
    image: '/images/best15.jpg',
    info: { level: '중급', day: '30일', time: '6개월' },
    price: '₩36,000',
    originalPrice: '₩52,000',
    discount: '31%'
  }
],
  '예술·교양': [
  {
    tag: ['에세이', '글쓰기'],
    title: '마음을 담아 쓰는 글\n에세이로 표현하기',
    desc: '나만의 생각을 기록하기\n감성 글쓰기',
    image: '/images/best16.jpg',
    info: { level: '초급', day: '10일', time: '1년' },
    price: '₩25,000',
    originalPrice: '₩35,000',
    discount: '29%'
  },
  {
    tag: ['악기', '취미'],
    title: '한 곡 완주!\n입문자를 위한 피아노 클래스',
    desc: '음악의 기초부터\n나만의 연주까지',
    image: '/images/best17.jpg',
    info: { level: '중급', day: '20일', time: '1년' },
    price: '₩41,000',
    originalPrice: '₩59,000',
    discount: '30%'
  },
  {
    tag: ['감성취미', '캘리그라피'],
    title: '한 글자 한 감성\n손글씨 캘리그라피 입문',
    desc: '손글씨로 전하는 감성',
    image: '/images/best18.jpg',
    info: { level: '초급', day: '5일', time: '1년' },
    price: '₩19,000',
    originalPrice: '₩27,000',
    discount: '30%'
  },
  {
    tag: ['미술', '컬러링'],
    title: '색으로 말해요\n마음이 편해지는 컬러링 클래스',
    desc: '심리적 안정과 창의력을 동시에!\n컬러링으로 만나는 힐링 시간',
    image: '/images/best19.jpg',
    info: { level: '초급', day: '15일', time: '6개월' },
    price: '₩29,000',
    originalPrice: '₩42,000',
    discount: '31%'
  },
  {
    tag: ['사진', '기록'],
    title: '찰나를 남기다\n감성 필름 사진 입문',
    desc: '일상 속 순간을 예술로 담아내는\n아날로그 필름 사진의 세계',
    image: '/images/best20.jpg',
    info: { level: '중급', day: '30일', time: '1년' },
    price: '₩44,000',
    originalPrice: '₩62,000',
    discount: '29%'
  }
]
}

const BestSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('IT·디지털')

  return (
    <section>
      {/* 타이틀 */}
      <h2 style={{ margin: '0 0 25px 0', fontSize: '22px'}}>이번주 TOP5</h2>

      {/* 메인 박스 */}
      <div
        style={{
          width: '1350px',
          maxWidth: '1350px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
                padding: '18px 20px',
                border: 'none',
                // borderLeft: selectedCategory === cat ? '4px solid #5584B0' : '3px solid transparent',
                background: selectedCategory === cat ?   '#717171' : 'white',
                color: selectedCategory === cat ? 'white' : '#717171',
                fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                fontSize: '15px',
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
                state={{
                  desc: item.desc,
                  image: item.image,
                  level: item.info.level,
                  day: item.info.day,
                  time: item.info.time,
                  price: item.price,
                  originalPrice: item.originalPrice,
                  discount: item.discount
                }}
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
