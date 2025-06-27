import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import dummyCourses from '../data/dummyCourses';

const iconMenuList = [
  { label: '미리보기', icon: '/icons/d_preview.svg', size: 35 },
  { label: '찜하기', icon: '/icons/d_heart.svg', size: 28 },
  { label: '공유하기', icon: '/icons/d_share.svg', size: 25 },
];

const CoursedetailPage = () => {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { overlayTitle, overlaySub, desc, image, level, day, time, price, originalPrice, discount } = location.state || {};
  const [selectedOption, setSelectedOption] = useState('1년 수강');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const course = dummyCourses.find((c) => c.title === title);
  if (!course) {
    alert('강의 정보를 찾을 수 없습니다.');
    return;
  }

  const alreadyExists = cart.some((item) => item.id === course.id);
  if (alreadyExists) {
    alert('이미 장바구니에 담긴 강의입니다.');
    return;
  }

  const newItem = {
    id: course.id,
    option: selectedOption,
  };

  localStorage.setItem('cart', JSON.stringify([...cart, newItem]));
  // 실시간 장바구니 뱃지 업데이트
  window.dispatchEvent(new Event('cartUpdated'));

  // 팝업 모달 열기
  setIsCartModalOpen(true);
};



  return (
    <section style={{ width: '100vw', margin: '70px 0' }}>
      <div
        style={{
          maxWidth: '1270px',
          margin: '0 auto',
          padding: '60px 20px 40px',
          display: 'flex',
          gap: '40px',
          position: 'relative'
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
        <aside
          style={{
            flex: 1,
            position: 'sticky',
            top: '130px',
            alignSelf: 'flex-start',
            maxWidth: '390px'
          }}>
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #D4D4D4',
              backgroundColor: '#fff',
              fontFamily: 'sans-serif',
              maxWidth: '390px',
              padding: '35px 40px',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ fontSize: '20px', fontWeight: '600', margin: '0' }}>
              {title || '강의 제목'}
            </h2>
            <div style={{ fontSize: '14px', color: '#444', margin: '20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/icons/loginprofil1.svg" alt="프로필사진" style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
              {overlaySub || '강사명'}
            </div>

            {/* 가격 옵션 */}
            <div style={{ marginBottom: '15px' }}>
              <button
                onClick={() => setSelectedOption('1년 수강')}
                style={{
                  width: '100%',
                  padding: '17px 25px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  border: selectedOption === '1년 수강' ? '2px solid #E57373' : '2px solid #ccc',
                  backgroundColor: selectedOption === '1년 수강' ? '#FFF3F3' : '#fff',
                  marginBottom: '7px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>1년 수강</span>
                  <span>
                    <span style={{ textDecoration: 'line-through', color: '#aaa', marginRight: '5px' }}>₩250,000</span>
                    <span style={{ color: '#000' }}>₩120,000</span>
                  </span>
                </div>
              </button>

              <button
                onClick={() => setSelectedOption('무제한 수강')}
                style={{
                  width: '100%',
                  padding: '17px 25px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  border: selectedOption === '무제한 수강' ? '2px solid #E57373' : '2px solid #ccc',
                  backgroundColor: selectedOption === '무제한 수강' ? '#FFF3F3' : '#fff',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>무제한 수강</span>
                  <span>
                    <span style={{ textDecoration: 'line-through', color: '#aaa', marginRight: '5px' }}>₩250,000</span>
                    <span style={{ color: '#000' }}>₩175,000</span>
                  </span>
                </div>
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              style={{
                width: '100%',
                padding: '20px 0',
                backgroundColor: '#E57373',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '15px',
                marginBottom: '9px',
                cursor: 'pointer',
              }}
            >
              수강신청 하기
            </button>

            {/* 장바구니 팝업 모달 */}
            {isCartModalOpen && (
              <div style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
              }}>
                <div style={{ background: '#fff', padding: '30px 40px', borderRadius: '10px', maxWidth: '400px', textAlign: 'center' }}>
                  <h3 style={{ marginBottom: '20px' }}>장바구니에 담겼습니다!</h3>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <button
                      onClick={() => {
                        setIsCartModalOpen(false);
                        navigate('/cart');
                      }}
                      style={{ padding: '10px 20px', backgroundColor: '#E57373', color: '#fff', borderRadius: '6px', fontWeight: 'bold' }}
                    >
                      장바구니로 이동
                    </button>
                    <button
                      onClick={() => setIsCartModalOpen(false)}
                      style={{ padding: '10px 20px', backgroundColor: '#eee', color: '#333', borderRadius: '6px', fontWeight: 'bold' }}
                    >
                      계속 쇼핑하기
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 아이콘 메뉴 */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {iconMenuList.map(({ label, icon, size }) => (
                <button
                  key={label}
                  onClick={() => {
                    if (label === '미리보기') setIsModalOpen(true);
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    height: '75px',
                  }}
                >
                  <img src={icon} alt={label} style={{ width: `${size}px`, height: `${size}px`, marginBottom: '5px' }} />
                  <span style={{ color: '#888', fontSize: '13px' }}>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* 미리보기 영상 */}
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}>
            <div style={{
              position: 'relative',
              width: '80%',
              maxWidth: '720px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
            }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '20px',
                  color: '#aaa',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
              <video
                controls
                autoPlay
                style={{ width: '100%', height: 'auto' }}
              >
                <source src="/videos/preview.mp4" type="video/mp4" />
                미리보기 영상을 지원하지 않는 브라우저입니다.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursedetailPage;