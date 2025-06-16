import React from 'react';
import { useLocation } from 'react-router-dom';
import dummyCourses from '../data/dummyCourses';

const SearchResult = () => {
  const location = useLocation();
  const keyword = location.state?.keyword?.toLowerCase() || '';

  const results = dummyCourses.filter(course =>
    course.title.toLowerCase().includes(keyword) ||
    course.tag?.some(tag => tag.toLowerCase().includes(keyword))
  );

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>
        <strong>{keyword}</strong> 검색 결과: 총 {results.length}개
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {results.map(course => (
          <div key={course.id} style={{ background: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <img src={course.image} alt={course.title} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
            <div style={{ padding: '12px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>{course.title}</div>
              <div>{course.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import dummyCourses from '../data/dummyCourses';

// const SearchResult = () => {
//   const keyword = '프론트'; // ⭐ 테스트용 하드코딩 키워드

//   const results = dummyCourses.filter(course =>
//     course.title.toLowerCase().includes(keyword.toLowerCase()) ||
//     course.tag?.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))
//   );

//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
//       <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>
//         <strong>{keyword}</strong> <span style={{ color:'#979797',fontSize: '20px'  }}>검색 결과</span>
//       </h2>
//       <p style={{ color: '#213547', fontSize: '18px', margin: '40px 0 20px', fontWeight: 'bold' }}>총 {results.length}개</p>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
//           gap: '28px',
//           marginTop: '30px',
//         }}
//       >
//         {results.map((course, idx) => (
//           <Link
//             key={idx}
//             to={`/courses/${encodeURIComponent(course.title)}`}
//             state={course}
//             style={{ textDecoration: 'none', color: 'inherit' }}
//           >
//             <div
//               style={{
//                 borderRadius: '10px',
//                 width: '100%',
//                 height: '280px',
//                 overflow: 'hidden',
//                 boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px',
//                 cursor: 'pointer',
//                 transition: 'transform 0.3s',
//                 position: 'relative',
//                 background: '#fff',
//               }}
//               onMouseEnter={e => {
//                 const img = e.currentTarget.querySelector('img');
//                 if (img) img.style.transform = 'scale(1.07)';
//               }}
//               onMouseLeave={e => {
//                 const img = e.currentTarget.querySelector('img');
//                 if (img) img.style.transform = 'scale(1)';
//               }}
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 style={{
//                   width: '100%',
//                   height: '140px',
//                   objectFit: 'cover',
//                   transition: 'transform 0.3s'
//                 }}
//               />
//               <div style={{ padding: '12px 16px' }}>
//                 {course.tag && (
//                   <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
//                     {course.tag.map((tag, i) => (
//                       <span key={i} style={{
//                         backgroundColor: '#F3F5F9',
//                         color: '#3B6EA4',
//                         fontSize: '11px',
//                         padding: '3px 8px',
//                         borderRadius: '30px',
//                         fontWeight: 'bold'
//                       }}>
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//                 <div style={{ fontSize: '14px', fontWeight: 'bold', minHeight: '40px' }}>
//                   {course.title}
//                 </div>
//                 <div style={{ fontSize: '13px', color: '#000', fontWeight: 'bold' }}>
//                   <span style={{ color: '#1E88E5', marginRight: '5px' }}>{course.discount}</span>
//                   <span style={{ textDecoration: 'line-through', color: '#aaa', marginRight: '6px', fontSize: '12px' }}>{course.originalPrice}</span>
//                   {course.price}
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResult;
