import { Link } from 'react-router-dom'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 강의 카드 데이터 예시
const courseCards = [
  {
    tag: ['타로', '힐링'],
    title: '무작정 암기는 이제 그만! 함께 보는 타로 이야기',
    img: '/images/new1.jpg',
    info: { level: '초급', day: '35일', time: '1년' }
  },
  {
    tag: ['글쓰기'],
    title: '나의 생각을 표현해봐요 - 저절로 써지는 글쓰기 강좌',
    img: '/images/new2.jpg',
    info: { level: '고급', day: '140일', time: '1년' }
  },
  {
    tag: ['사진', '촬영', '스냅'],
    title: '셔터 누르기 부터 시작한다 [스냅 촬영 기초 강의]',
    img: '/images/new3.jpg',
    info: { level: '중급', day: '140일', time: '1년' }
  },
    {
    tag: ['타로', '힐링'],
    title: '무작정 암기는 이제 그만! 함께 보는 타로 이야기',
    img: '/images/new1.jpg',
    info: { level: '초급', day: '35일', time: '1년' }
  },
    {
    tag: ['글쓰기'],
    title: '나의 생각을 표현해봐요 - 저절로 써지는 글쓰기 강좌',
    img: '/images/new2.jpg',
    info: { level: '고급', day: '140일', time: '1년' }
  },
    {
    tag: ['타로', '힐링'],
    title: '무작정 암기는 이제 그만! 함께 보는 타로 이야기',
    img: '/images/new1.jpg',
    info: { level: '초급', day: '35일', time: '1년' }
  },
  {
    tag: ['글쓰기'],
    title: '나의 생각을 표현해봐요 - 저절로 써지는 글쓰기 강좌',
    img: '/images/new2.jpg',
    info: { level: '고급', day: '140일', time: '1년' }
  },
  {
    tag: ['사진', '촬영', '스냅'],
    title: '셔터 누르기 부터 시작한다 [스냅 촬영 기초 강의]',
    img: '/images/new3.jpg',
    info: { level: '중급', day: '140일', time: '1년' }
  },
]

const CourseCards = ({ data }) => (
  <Link
    to={`/courses/${encodeURIComponent(data.title)}`}
    state={{
      image: data.img,
      desc: data.desc,
      level: data.info.level,
      day: data.info.day,
      time: data.info.time
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
      {/* 이미지 */}
      <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
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

      {/* 텍스트 */}
      <div style={{ padding: '0px 16px', marginTop: '8px' }}>
        {data.tag && (
          <div style={{ display: 'flex', gap: '7px', marginBottom: '6px' }}>
            {data.tag.map((t, i) => (
              <span
                key={i}
                style={{
                  color: '#787878',
                  borderRadius: '5px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  padding: '4px 11px',
                  backgroundColor: '#ededed',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <h3 style={{ fontSize: '14.5px', fontWeight: 'bold', margin: 0, color: '#213547' }}>
          {data.title}
        </h3>
      </div>

      {/* 인포 */}
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
)

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: 'absolute',
      right: -51,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 36,
      height: 112,
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

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: 'absolute',
      left: -52,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 36,
      height: 112,
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

const NewSection = () => {
  const sliderSettings = {
    infinite: false,
    slidesToShow: 4.7,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
  }

  return (
    <section style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 20px' }}>
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
          <span style={{ color: '#42B2BB', fontWeight: 700 }}>신규</span>
          <span style={{ color: '#222', fontWeight: 700, marginLeft: 4 }}>강의 모음</span>
        </h2>
      </div>

      <div style={{
        width: '100%',
        // overflow: 'hidden',
        position: 'relative',
        // padding: '0 70px',
        // height: '390px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}>
        <Slider {...sliderSettings}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
        >
          {courseCards.map((data, idx) => (
            <CourseCards key={idx} data={data} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default NewSection
