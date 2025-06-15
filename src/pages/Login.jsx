import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainStyleInput = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 17px;
  border: transparent;
  font-size: 14px;
  box-sizing: border-box;
  appearance: none;
  MozAppearance: textfield;
  WebkitAppearance: none;
  color: #333;

  &::placeholder {
    color:rgb(129, 129, 129);
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('로그인 시도:', email, password);
    // 👉 여기에 백엔드 연동 or 로그인 로직 추가!
  };

  return (
    <div style={{ margin: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          width: '276px',
          padding: '46px 52px',
          borderRadius: '16px',
          border: '1px solid #eee',
          backgroundColor: '#fff',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          // boxSizing: 'border-box',
          boxShadow: '0 2px 6px 0 rgba(0,0,0,.06)',
        }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 27px 0' }}>로그인</h2>

        <MainStyleInput>
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="아이디"
            style={{ borderRadius: '8px 8px 0px 0px' }}
          />

          <div style={{ height: '1px', backgroundColor: '#ddd' }} />

          <StyledInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            style={{ borderRadius: '0px 0px 8px 8px', marginTop: '1px' }}
          />
        </MainStyleInput>

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '13px',
            borderRadius: '8px',
            backgroundColor: '#4C779F',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          로그인
        </button>
        <Link to="/Signup"
        style={{
          color: 'rgb(83, 83, 83)',
          fontSize: '12px', fontWeight:'bold',
          display: 'block',
          padding: '3px 9px',
          borderRadius: '4px',
          textDecoration: 'underline',
          marginTop: '27px'
          }}>
            이메일로 가입하기
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('로그인 시도:', email, password);
//     // 👉 여기에 백엔드 연동 or 로그인 로직 추가!
//   };

//   // 공통 input 스타일
//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '12px',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     fontSize: '14px',
//     boxSizing: 'border-box',
//     appearance: 'none',         // 크로스브라우징 해결
//     MozAppearance: 'textfield', // Firefox 대응
//     WebkitAppearance: 'none',   // Safari 대응
//   };

//   return (
//     <div
//       style={{
//         width: '374px',
//         margin: '100px auto',
//         padding: '30px 44px',
//         borderRadius: '16px',
//         boxShadow: '0 8px 20px rgba(85, 132, 176, 0.15)',
//         border: '1px solid #d6e4f0',
//         backgroundColor: '#fff',
//         textAlign: 'center',
//         fontFamily: 'sans-serif',
//         boxSizing: 'border-box',
//       }}
//     >
//       <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>로그인</h2>

//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="이메일"
//         style={inputStyle}
//       />

//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="비밀번호"
//         style={inputStyle}
//       />

//       <button
//         onClick={handleLogin}
//         style={{
//           width: '100%',
//           padding: '10px',
//           borderRadius: '8px',
//           background: 'linear-gradient(to right, #4762a6, #3db3b3)',
//           color: 'white',
//           fontWeight: 'bold',
//           border: 'none',
//           cursor: 'pointer',
//           marginTop: '10px',
//         }}
//       >
//         로그인
//       </button>

//       <div style={{ marginTop: '20px' }}>
//         <Link to="/home" style={{ fontSize: '13px', color: '#4762a6', textDecoration: 'none' }}>
//           이메일로 가입하기
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;