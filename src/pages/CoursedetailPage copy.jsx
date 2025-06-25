//CoursedetailPage.jsx

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const CoursedetailPage = () => {
  const { title } = useParams();
  const location = useLocation();
  const { overlayTitle, overlaySub } = location.state || {};
  const { desc, image, level, day, time, price, originalPrice, discount } = location.state || {};

  return (
    <div>
      {/*  헤더 섹션 */}
      <section
        style={{
          width: '100vw',
          position: 'relative',
          backgroundImage: `url('/images/coursedetail1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          textShadow: '0 2px 6px rgba(0,0,0,0.3)',
        }}
      >
        <h1 style={{
          color: '#E0E0E0',
          fontSize: '27px',
          fontWeight: 500,
          lineHeight: 2,
          whiteSpace: 'pre-line',
          maxWidth: '800px'
        }}>
          HTML/CSS 기초 → JavaScript 핵심 → React 실전 프로젝트{'\n'}
          → 최신 프레임워크까지, 프론트엔드 개발의 A to Z를 경험하세요!
        </h1>
      </section>

      {/* 본문 전체 Flex 컨테이너 */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px 40px',
          display: 'flex',
          gap: '40px',
        }}
      >
        {/* 왼쪽 콘텐츠 영역 */}
        <div style={{ flex: '2, 1, 30%' }}>
          {/* 강좌 소개 */}
          <div>
            <div
              style={{
                background: 'linear-gradient(90deg, #4C779F 38%, #4699AF 100%)',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '21px',
                padding: '18px 40px 0',
                borderRadius: '6px 6px 0 0',
                height: '51px'
              }}
            >
              강좌 소개
            </div>
            <div
              style={{
                border: '1px solid #ddd',
                padding: '20px',
                borderTop: 'none',
                borderRadius: '0 0 6px 6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'visible'
              }}
            >
              {/* 강의 개요 */}
              <div style={{ margin: '40px 0' }}>
                <h2 style={{ marginBottom: '35px' }}>강의 개요</h2>
                <img
                  src="/images/coursedt1.jpg"
                  alt="강의 개요"
                  style={{
                    width: '650px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    height: '320px'
                  }}
                />
                <p style={{ whiteSpace: 'pre-line', fontSize: '16px', lineHeight: 3 }}>
                  · 프론트엔드 실무에 바로 적용 가능한 코드와 디자인을 소개하고 있어, 실전에 최적화된 강의입니다.
                  {'\n'}
                  · UX 관점에서 사용자 흐름을 이해하며 마크업 구조를 설계하는 법을 학습합니다.
                </p>
              </div>

              <hr style={{
                border: 'none',
                borderTop: '1px solid #ccc',
                margin: '30px 0',
                width: '100%',
                alignSelf: 'stretch'
              }} />

              {/* 강의 특징 */}
              <div style={{ margin: '40px 0' }}>
                <h2 style={{ marginBottom: '35px' }}>강의 특징</h2>
                <img
                  src="/images/coursedt2.jpg"
                  alt="강의 특징"
                  style={{
                    width: '650px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    height: '320px'
                  }}
                />
                <p style={{ fontSize: '16px', lineHeight: 3 }}>
                  · 실습 위주의 커리큘럼으로 누구나 따라올 수 있도록 자세히 구성
                  <br />· 핵심 요소를 빠짐없이 짚어주는 개념 설명
                  <br />· 실제 현업 중심의 작업 프로세스를 예제로 직접 경험
                  <br />· 다양한 실습과 프로젝트 완성으로 취업에 도움이 됨
                </p>
              </div>

              <hr style={{
                border: 'none',
                borderTop: '1px solid #ccc',
                margin: '30px 0',
                width: '100%',
                alignSelf: 'stretch'
              }} />

              {/* 추천 수강 대상 */}
              <div style={{ margin: '40px 0' }}>
                <h2 style={{ marginBottom: '30px' }}>추천 수강 대상</h2>
                <p style={{ fontSize: '16px', lineHeight: 3 }}>
                  · 실습과 결과물 중심의 수업으로 취업까지 빠르게 이어지고 싶은 분
                  <br />· 현업에서 쓰이는 HTML/CSS와 프레임워크를 배우고 싶은 분
                  <br />· 프론트엔드 실무 활용 능력을 빠르게 높이고 싶은 분
                  <br />· ChatGPT, 자동화 도구를 적극 활용해 작업 효율을 높이고 싶은 분
                  <br />· 실무 위주 커리큘럼으로 제작된 프로젝트 사례로 자신만의 ‘포트폴리오’를 만들고 싶은 분
                </p>
              </div>
            </div>
          </div>

          {/* 하단 강의 목차 */}
          <div style={{ marginTop: '40px' }}>
            <div
              style={{
                background: 'linear-gradient(90deg, #4C779F 38%, #4699AF 100%)',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '21px',
                padding: '16px 28px',
                borderRadius: '10px 10px 0 0',
              }}
            >
              교육과정
            </div>

            <div
              style={{
                border: '1px solid #ddd',
                borderTop: 'none',
                borderRadius: '0 0 10px 10px',
                padding: '0',
                overflow: 'hidden',
              }}
            >
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {[
                  {
                    title: '1. 프론트엔드 개발 입문과 로드맵',
                    badge: '미리보기',
                    desc: '프론트엔드의 정의, 역할, 커리어 로드맵 소개',
                    time: '10:30',
                  },
                  {
                    title: '2. HTML/CSS 실습과 마크업 구조 설계',
                    desc: '사용자 흐름 기반의 마크업, 반응형 구조 설계',
                    time: '12:00',
                  },
                  {
                    title: '3. JavaScript 핵심 문법과 인터랙션 구현',
                    desc: '변수, 조건문, 반복문, DOM 조작 및 이벤트 처리',
                    time: '13:20',
                  },
                  {
                    title: '4. 실전 프로젝트로 배우는 React 기초',
                    desc: '컴포넌트 구조 이해, 상태 관리, JSX 문법 실습',
                    time: '14:00',
                  },
                  {
                    title: '5. 실무 중심의 UX/UI 설계 및 개발 워크플로우',
                    desc: '디자인-코드 연결, 사용자 흐름 기반 설계',
                    time: '11:40',
                  },
                  {
                    title: '6. ChatGPT 및 자동화 도구를 활용한 생산성 향상',
                    desc: '코드 자동화, 문서 생성, 실무 적용 예제 실습',
                    time: '12:30',
                  },
                  {
                    title: '7. 포트폴리오 프로젝트 실습 및 피드백',
                    desc: '실제 서비스 기획부터 구현까지 실습 및 결과물 완성',
                    time: '13:10',
                  }
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid #eee',
                      padding: '20px',
                      gap: '12px',
                      fontSize: '14px',
                      color: '#333',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                    }}
                  >
                    {/* 왼쪽: 제목 + 뱃지 */}
                    <div style={{ display: 'flex', alignItems: 'center', flex: '0 1 auto' }}>
                      <strong style={{ color: '#2F5D8A', fontWeight: 'bold' }}>{item.title}</strong>
                      {item.badge && (
                        <span
                          style={{
                            backgroundColor: 'rgb(230, 243, 247)',
                            color: 'rgb(27, 130, 160)',
                            fontSize: '10px',
                            padding: '3px 6px',
                            borderRadius: '6px',
                            marginLeft: '8px',
                            whiteSpace: 'nowrap',
                            fontWeight: '700'
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* 가운데: 설명 */}
                    <div
                      style={{
                        flex: '1 1 auto',
                        color: '#666',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textAlign: 'end'
                      }}
                    >
                      {item.desc}
                    </div>

                    {/* 오른쪽: 시간 */}
                    <div
                      style={{
                        flex: '0 0 35px',
                        color: '#888',
                        fontSize: '13px',
                        textAlign: 'right',
                      }}
                    >
                      {item.time}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> {/* ✅ 왼쪽 콘텐츠 영역 닫는 div */}

        {/* 오른쪽 수강 정보 카드 */}
       <aside style={{ flex: 1 }}>
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
              backgroundColor: '#fff',
              fontFamily: 'sans-serif',
              maxWidth: '280px',
              height: '460px'
            }}
          >
            {/* 썸네일 + 텍스트 오버레이 */}
            <div style={{ position: 'relative', borderRadius: '10px 10px 0 0', overflow: 'hidden', filter: 'brightness(0.89) contrast(1.05)' }}>
              <img
                src={image || '/images/default-thumbnail.jpg'}
                alt="강의 썸네일"
                style={{ width: '100%', display: 'block', height: '186px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: 'bold', zIndex: '2' }}>
                  {title || '제목 없음'}
                </div>
              </div>
            </div>


            {/* 가격 */}
            <div style={{ 
              padding: '23px 20px 15px', 
              borderBottom: '1px solid #eee', 
              display: 'flex', 
              justifyContent: 'space-between' 
              }}>

              {discount && (
                <div style={{
                fontSize: '19px', 
                color: '#1E88E5',
                display: 'flex',
                alignItems: 'end',
                marginBottom: '2px'
                }}>
                  {discount}
                </div>
              )}
              <div style={{
                display: 'flex',
                gap: '4px'
              }}>
                {originalPrice && ( 
                  <div
                    style={{
                      fontSize: '13px',
                      color: '#999',
                      textDecoration: 'line-through',
                      display: 'flex',
                      alignItems: 'end',
                      marginBottom: '3px'
                    }}
                  >
                    {originalPrice.toLocaleString()}
                </div>
                )}

                  <div style={{ 
                    fontSize: '21px', 
                    fontWeight: 'bold', 
                    color: '#000',
                    display: 'flex',
                    alignItems: 'end'
                    }}>
                    {price ? `${price.toLocaleString()}` : '가격 정보 없음'}
                  </div>
                </div>
            </div>

            {/* 정보 리스트 */}
            <div style={{ padding: '11px 20px 4px', fontSize: '14px', color: '#444', lineHeight: 2, marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <img
                    src={
                      level === '초급'
                        ? '/icons/level1.svg'
                        : level === '중급'
                        ? '/icons/level2.svg'
                        : '/icons/level3.svg'
                    }
                    alt="난이도 아이콘"
                    style={{ width: '16px', height: '16px', marginRight: '8px' }}
                  />
                  난이도
                </div>
                <div style={{ fontWeight: '500' }}>{level || '정보 없음'}</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <img
                    src="/icons/time.svg"
                    alt="소요 시간 아이콘"
                    style={{ width: '16px', height: '16px', marginRight: '8px' }}
                  />
                  소요 시간
                </div>
                <div style={{ fontWeight: '500' }}>{day || '정보 없음'}</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>  
                  <img
                    src="/icons/day.svg"
                    alt="시청 기간"
                    style={{ width: '16px', height: '16px', marginRight: '8px' }}
                  />
                  시청 기간
                </div>
                <div style={{ fontWeight: '500' }}>{time || '정보 없음'}</div>
              </div>
            </div>


            {/* 버튼 */}
            <div style={{ padding: '12px' }}>
              <button
                style={{
                  width: '100%',
                  backgroundColor: '#5A83C6',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                결제하기
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default CoursedetailPage;
