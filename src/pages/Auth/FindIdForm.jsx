import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FindId = () => {
  const navigate = useNavigate(); // ✅ 옮긴 위치
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFindId = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/find-id', {
        name,
        email,
      });

      if (res.data.success) {
        alert(`✅ 아이디는 "${res.data.username}" 입니다.`);
        navigate('/login'); // ✅ 로그인 페이지로 이동
      } else {
        alert('❌ 일치하는 사용자 정보가 없습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('❌ 서버 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{ margin: '100px auto', width: '350px', textAlign: 'center' }}>
      <h2>아이디 찾기</h2>
      <form
        onSubmit={handleFindId}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}
      >
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '14px' }}
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '14px' }}
        />
        <button
          type="submit"
          style={{ padding: '10px', backgroundColor: '#4C779F', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          아이디 찾기
        </button>

        <Link to="/auth?mode=login"
          style={{
            color: 'rgb(150, 150, 150)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            display: 'block',
            padding: '3px 0',
            borderRadius: '4px',
            marginTop: '8px',
            width: '74px',
          }}
        >
          로그인
        </Link>
      </form>
    </div>
  );
};

export default FindId;
