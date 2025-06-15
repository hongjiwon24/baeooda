//Section2.jsx

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
      tag: ['사진', '촬영', '스냅'],
    title: '셔터 누르기 부터 시작한다 [스냅 촬영 기초 강의]',
    img: '/images/new3.jpg',
    info: { level: '중급', day: '140일', time: '1년' }
  },
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
      right: '30px',
      bottom: '40x',
      zIndex: 2
    }}
     />
  </div>
)

// const CourseCards = ({ data, isLast }) => (
//   <Link
//     to={`/courses/${encodeURIComponent(data.title)}`}
//     state={{
//       image: data.img,
//       desc: data.desc,
//       level: data.info.level,
//       day: data.info.day,
//       time: data.info.time
//     }}
//     style={{ textDecoration: 'none' }}
//   >
//     <div
//       style={{
//         width: '260px',
//         maxWidth: '260px',
//         height: '370px',
//         borderRadius: '14px',
//         overflow: 'hidden',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         border: '2px solid rgb(191, 215, 227)',
//         background: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         position: 'relative',
//         cursor: 'pointer',
//         alignItems: 'center',
//         transition: 'transform 0.3s',
//         margin: '10px 10px'
//       }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//     >
//       {/* 이미지 */}
//       <div
//         style={{
//           width: '215px',
//           height: '160px',
//           background: `url(${data.img}) center/cover no-repeat`,
//           margin: '12px 0 5px 0',
//           borderRadius: '14px'
//         }}
//       />
//       <div 
//         style={{
//           marginTop: '10px', 
//           height: '160px', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           justifyContent: 'center', 
//           width: '239px' 
//         }}
//       >
//         {/* 태그 */}
//         <div style={{ display: 'flex', gap: '7px', padding: '14px 18px 0 18px' }}>
//           {data.tag.map((t, i) => (
//             <span
//               key={i}
//               style={{
//                 background: '#739CC2',
//                 color: '#fff',
//                 borderRadius: '5px',
//                 fontSize: '12px',
//                 fontWeight: 600,
//                 padding: '3px 11px'
//               }}
//             >{t}</span>
//           ))}
//         </div>
//         {/* 타이틀 */}
//         <div
//           style={{
//             padding: '15px 18px 0 18px',
//             fontWeight: 700,
//             fontSize: '16px',
//             color: '#1D242B',
//             minHeight: '52px',
//             lineHeight: 1.4
//           }}
//         >
//           {data.title}
//         </div>

//         {/* 하단 info (예시) */}
//         <div
//           style={{
//             marginTop: '24px',
//             padding: '10px 18px 20px 18px',
//             display: 'flex',
//             justifyContent: 'end',
//             fontSize: '14px',
//             color: '#5584B0',
//             fontWeight: 500,
//             borderTop: '1px solid #E4E4E4',
//             gap: '10px',
//             alignItems: 'center'
//           }}
//         >
//           {/* 레벨 SVG */}
//           <img
//             src={
//               data.info.level === '초급'
//                 ? '/icons/level1.svg'
//                 : data.info.level === '중급'
//                 ? '/icons/level2.svg'
//                 : '/icons/level3.svg'
//             }
//             alt="레벨 아이콘"
//             style={{ width: '16px', height: '16px' }}
//           />
//           <span>{data.info.level}</span>
//           <span style={{ color: '#CCE0F3' }}>ㅣ</span>
//           {/* 시간 SVG */}
//           <img
//             src="/icons/time.svg"
//             alt="시간 아이콘"
//             style={{ width: '16px', height: '16px' }}
//           />
//           <span>{data.info.day}</span>
//         </div>
//       </div>
//     </div>
//   </Link>
// )

const CourseCards = ({ data, isLast }) => (
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', width: '100%', maxWidth: '1350px'}}>
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
