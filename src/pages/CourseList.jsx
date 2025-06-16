import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allCourses from '../data/allCourses';
import dummyCourses from '../data/dummyCourses';

const CourseList = () => {
  const { main, sub } = useParams(); // ✅ URL에서 슬러그 추출

  // ✅ 슬러그 → 한글 카테고리명 변환
  const mainCategory = Object.keys(allCourses).find(
    (key) => main === getMainSlug(key)
  );
  const subCategory = allCourses[mainCategory]?.find((item) => item.slug === sub)?.title;

  // ✅ 슬러그 변환 함수
  function getMainSlug(category) {
    return {
      'IT·디지털': 'it',
      '비즈니스·경제': 'biz',
      '생활·실무': 'life',
      '예술·교양': 'art',
    }[category];
  }

  // ✅ 반대로 한글 → 슬러그
  const mainSlug = getMainSlug(mainCategory); // ✅ 이걸 아래 링크에 써야 해!

  // ✅ 강의 필터링
  const filteredCourses = dummyCourses.filter(
    (course) =>
      course.mainCategory === mainCategory &&
      course.subCategory === subCategory
  );

  if (!mainCategory || !subCategory) return <div>잘못된 카테고리입니다.</div>;

  return (
    <div style={{ display: 'flex', width: '1350px', padding: '70px 0', margin: '0 auto' }}>
      {/* 사이드 메뉴 */}
      <aside style={{ width: '210px', marginRight: '100px' }}>
        <div style={{
          background: 'linear-gradient(to right, #84A1BD 38%, #83A7BF, #80B8C8 100%)',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '17px 28px',
          borderRadius: '7px 7px 0 0',
          color: 'white'
        }}>
          {mainCategory}
        </div>
        <ul style={{
          border: '1px solid #E6E6E6',
          borderTop: 'none',
          borderRadius: '0 0 7px 7px',
          margin: 0,
          padding: 0
        }}>
          {allCourses[mainCategory].map((subItem, i) => (
            <Link
              key={i}
              to={`/courses/${mainSlug}/${subItem.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <li
                style={{
                  listStyle: 'none',
                  padding: '15px 24px',
                  backgroundColor: subItem.slug === sub ? '#f0f9fb' : '#fff',
                  fontWeight: subItem.slug === sub ? 'bold' : 'normal',
                  color: subItem.slug === sub ? '#3A6A92' : '#B7B7B7',
                  cursor: 'pointer',
                }}
              >
                {subItem.title}
              </li>
            </Link>
          ))}
        </ul>
      </aside>

      {/* 강의 리스트 */}
      <main style={{ flexGrow: 1 }}>
        <h2 style={{
          // width: '1050px',
          fontSize: '16px',
          margin: '0 0 38px 0',
          padding: '12px 25px',
          backgroundColor: '#F6F6F6'
        }}>
          {subCategory} <span style={{ color: '#3A6A92' }}>({filteredCourses.length})</span>
        </h2>

        {/* 카드 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px 20px',
          }}
        >
          {filteredCourses.map(course => (
            <Link
              key={course.id}
              to={`/courses/${encodeURIComponent(course.title)}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  borderRadius: '10px',
                  width: '226px',
                  height: '280px',
                  overflow: 'hidden',
                  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  position: 'relative'
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
                <div
                style={{
                  width: '100%',
                  height: '140px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      width: '100%',
                      height: '140px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s',
                    }}
                  />
                </div>
              {/* 텍스트 콘텐츠 영역 */}
              <div style={{ padding: '7px 16px' }}>
                {/* 태그 */}
                {course.tag && (
                  <div style={{ display: 'flex', gap: '7px', margin: '7px 0'}}>
                    {course.tag.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          color: '#787878',
                          borderRadius: '5px',
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
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '9px 0 0 0' }}>
                  {course.title}
                </h3>

                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#000',
                    display:'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: '15px',
                    right: '13px',}}
                >
                  <span style={{ color: '#1E88E5', marginRight: '6px' }}>{course.discount}</span>{' '}
                  <span
                    style={{
                      fontSize: '12px',
                      textDecoration: 'line-through',
                      color: '#aaa',
                      marginRight: '8px',
                    }}
                  >
                    {course.originalPrice}
                  </span>
                  {course.price}
                  
                </div>

                {/* info */}
                {/* {course.info && (
                  <div style={{ padding: '4px 18px 0 18px', fontSize: '13px', color: '#5584B0', fontWeight: 500 }}>
                    📶 {course.info.level}
                    <span style={{ margin: '0 6px', color: '#CCE0F3' }}>|</span>
                    ⏱ {course.info.day}
                  </div>
                  )} */}
                
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CourseList;
