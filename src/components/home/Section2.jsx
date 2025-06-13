//Section2.jsx

import { Link } from 'react-router-dom'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courseCards = [
  {
    tag: ['타로', '힐링'],
    title: '무작정 암기는 이제 그만! 함께 보는 타로 이야기',
    img: '/images/new1.jpg',
    info: { level: '초급', day: '35일', time: '1년' },
    price: '₩49,000',
    originalPrice: '₩69,000',
    discount: '29%'
  },
  {
    tag: ['디자인툴', '피그마'],
    title: '디자이너처럼 생각하기, 피그마로 배우는 실전 디자인',
    img: '/images/new4.jpg',
    info: { level: '초급', day: '40일', time: '1년' },
    price: '₩59,000',
    originalPrice: '₩89,000',
    discount: '34%'
  },
  {
    tag: ['글쓰기'],
    title: '나의 생각을 표현해봐요 - 저절로 써지는 글쓰기 강좌',
    img: '/images/new2.jpg',
    info: { level: '고급', day: '140일', time: '1년' },
    price: '₩39,000',
    originalPrice: '₩59,000',
    discount: '34%'
  },
  {
    tag: ['사진', '촬영', '스냅'],
    title: '셔터 누르기 부터 시작한다 [스냅 촬영 기초 강의]',
    img: '/images/new3.jpg',
    info: { level: '중급', day: '10일', time: '1년' },
    price: '₩33,000',
    originalPrice: '₩45,000',
    discount: '27%'
  },
  {
    tag: ['비즈니스 전략', '브랜딩'],
    title: '브랜드의 시작, 나만의 가치를 설계하는 비즈니스 전략',
    img: '/images/new5.jpg',
    info: { level: '중급', day: '75일', time: '1년' },
    price: '₩64,000',
    originalPrice: '₩84,000',
    discount: '24%'
  },
  {
    tag: ['문서작성', '오피스'],
    title: '보고서부터 자동화까지, 실무에 바로 쓰는 문서 스킬',
    img: '/images/new6.jpg',
    info: { level: '초급', day: '30일', time: '6개월' },
    price: '₩27,000',
    originalPrice: '₩39,000',
    discount: '31%'
  },
  {
    tag: ['에세이', '창작'],
    title: '마음을 담은 한 줄, 에세이로 기록하는 일상',
    img: '/images/new7.jpg',
    info: { level: '초급', day: '50일', time: '1년' },
    price: '₩44,000',
    originalPrice: '₩66,000',
    discount: '33%'
  },
  {
    tag: ['개발자도구', '코딩툴'],
    title: '코딩을 몰라도 괜찮아, 노코드 자동화 툴 입문',
    img: '/images/new8.jpg',
    info: { level: '중급', day: '25일', time: '6개월' },
    price: '₩42,000',
    originalPrice: '₩60,000',
    discount: '30%'
  },
  {
    tag: ['심리', '자기이해'],
    title: '나를 더 잘 알고 싶을 때, 심리로 만나는 자기탐색',
    img: '/images/new9.jpg',
    info: { level: '고급', day: '60일', time: '1년' },
    price: '₩58,000',
    originalPrice: '₩85,000',
    discount: '32%'
  }
]

const IntroCard = () => (
  <div
    style={{
      width: '250px',
      minWidth: '250px',
      height: '290px',
      background: 'linear-gradient(rgb(66, 178, 187) 5%, rgb(85, 132, 176) 95%)',
      borderRadius: '18px',
      marginRight: '30px',
      boxShadow:' rgba(100, 143, 185, 1) 0px 0px 8px',
      fontWeight: 700,
      fontSize: '17px',
      color: '#fff',
      position: 'relative',
      zIndex: 1
    }}
  >
    <p 
      style={{
        padding: '12px 27px',
        fontSize: '16px'
      }}
    >
      이번 달 개설된<br />신규 강의를 둘러보아요
    </p>
    <img src="/icons/section3-intro.svg" alt="신규강의 아이콘" style={{
      width: '90px',
      height: '100px',
      position: 'absolute',
      right: '34px',
      bottom: '30px',
      zIndex: 2
    }}
     />
  </div>
)

const CourseCards = ({ data, isLast }) => (
  <Link
    to={`/courses/${encodeURIComponent(data.title)}`}
    state={{
      image: data.img,
      desc: data.desc,
      level: data.info.level,
      day: data.info.day,
      time: data.info.time,
      price: data.price,
      originalPrice: data.originalPrice,
      discount: data.discount
    }}
    style={{ textDecoration: 'none' }}
  >
    <div
      style={{
        width: '255px',
        maxWidth: '255px',
        height: '290px',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        cursor: 'pointer',
        alignItems: 'center',
        margin: '10px 10px'
      }}
        onMouseEnter={e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.07)';
        }}
        onMouseLeave={e => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }}
      >
      {/* 이미지 영역 */}
      <div style={{
        width: '100%',
        height: '140px',
        overflow: 'hidden',
      }}>
        <img
          src={data.img}
          alt={data.title}
          style={{
            width: '100%',
            height: '140px',
            objectFit: 'cover',
            transition: 'transform 0.3s',
          }}
        />
      </div>

      {/* 콘텐츠 영역 */}
      <div style={{ padding: '0px 16px', marginTop: '8px' }}>
        {/* 태그 */}
        {data.tag && (
          <div style={{  display: 'flex', gap: '7px', marginBottom: '6px' }}>
            {data.tag.map((t, i) => (
              <span
                key={i}
                style={{
                  color: '#787878',
                  borderRadius: '5px',
                  // border: '1px solid #739CC2',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  padding: '4px 11px',
                  backgroundColor:'#ededed',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* 타이틀 */}
       <h3 style={{ fontSize: '14.5px', fontWeight: 'bold', margin: 0, color: '#213547' }}>
          {data.title}
       </h3>
      </div>

      {/* 인포 영역 (기존 유지) */}
      <div
        style={{
          padding: '14px 20px',
          display: 'flex',
          justifyContent: 'end',
          fontSize: '13px',
          color: '#5584B0',
          fontWeight: 'bold',
          gap: '4px',
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '3px'
        }}
      >
        <img
          src={
            data.info.level === '초급'
              ? '/icons/level1.svg'
              : data.info.level === '중급'
              ? '/icons/level2.svg'
              : '/icons/level3.svg'
          }
          alt="레벨 아이콘"
          style={{ width: '16px', height: '16px' }}
        />
        <span>{data.info.level}</span>
        <span style={{ color: '#CCE0F3' }}>ㅣ</span>
        <img
          src="/icons/time.svg"
          alt="시간 아이콘"
          style={{ width: '16px', height: '16px' }}
        />
        <span>{data.info.day}</span>
      </div>
    </div>
  </Link>
);

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        right: -51,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 36,
        height: 90,
        background: '#f5fafd',
        borderRadius: '14px',
        boxShadow: '0 0 0 2px #e4f2fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 6L12 10L8 14" stroke="#548EB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: -52,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 36,
        height: 90,
        background: '#f5fafd',
        borderRadius: '14px',
        boxShadow: '0 0 0 2px #e4f2fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 6L8 10L12 14" stroke="#548EB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

const NewSection = () => {
  const sliderSettings = {
    infinite: false,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false, 
  }

  return (
    <section
      style={{
        maxWidth: '1350px',
        marginTop: 0, 
        paddingTop: 0 
      }}
    >
      <h2>
        <span style={{ color: '#42B2BB', fontWeight: 700 }}>신규</span>
        <span style={{ color: '#222', fontWeight: 700, marginLeft: 4 }}>강의 모음</span>
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', width: '100%', maxWidth: '1350px', height: '290px'}}>
        <IntroCard />
        <div style={{ width: '950px', maxWidth: '100%', overflow: 'visible', position: 'relative', padding: '0 70px',  height: '390px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Slider {...sliderSettings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          >
            {courseCards.map((data, idx) => (
              <CourseCards key={idx} data={data} isLast={idx === courseCards.length - 1}/>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default NewSection
