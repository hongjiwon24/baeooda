import React, { useEffect, useState } from 'react';

const Aside = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    setShow(window.scrollY > 200); // 200px 넘으면 보임
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleScrollToTop}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        padding: '10px 16px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#5094B4',
        border: 'none',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        zIndex: 9999,
        width: '50px',
        height: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      <svg width="15" height="10" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.95055 11L7.50311 0.181818L14.0606 11H0.95055Z" fill="#fff"/>
      </svg>
      TOP
    </button>
  );
};

export default Aside;
