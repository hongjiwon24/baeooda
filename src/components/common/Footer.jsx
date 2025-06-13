const Footer = () => {
  return (
    <footer>
        <hr style={{
            width: '100vw',
            border: 'none',
            height: '1px',
            backgroundColor: '#ccc',
            }}
            />
        {/* 로고 및 링크 */}
        <div style={{
            width: '1350px',
            display: 'flex',
            padding: '70px 0',
            justifyContent: 'space-between',
            alignItems: 'end',
            margin: '0 auto',
            }}>
            <div style={{ gridColumn: 1, display: 'flex', flexDirection:'column', gap: '40px' }}>
            {/* 로고 */}
            <h1>
                <img src="/public/logo.svg" alt="로고" style={{ height:'34px', }}/>
            </h1>

            {/* 링크 목록 */}
            <div style={{ display:'flex', gap: '20px' }}>
                <a href="#">이용약관</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">오시는 길</a>
                <a href="#">FAQ</a>
                <a href="#">문의하기</a>
            </div>

            {/* 회사 정보 */}
            <div>
                <p style={{ margin: '0 0 5px 0' }}>
                회사명: 배우다(주)  대표: 홍지원, 이주영  사업자등록번호 123-45-67890
                서울시 영등포구 여의도동 12-3 빌딩
                </p>
                <p style={{ margin: 0 }}>
                대표전화: 070-1234-5678  이메일: asd@fghjk.co.kr
                </p>
            </div>
            </div>

            {/* 소셜 버튼들 (노, 피, 깃) */}
            <div style={{ gridColumn: 2, display: 'flex', justifyContent: 'end', gap: '5px' }}>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-300 text-white text-sm">카카오톡</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-300 text-white text-sm">인스타</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-300 text-white text-sm">유튜브</a>
            </div>
        </div>
</footer>

  )
}

export default Footer