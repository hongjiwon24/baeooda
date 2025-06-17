import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <hr style={{
            width: '100%',
            border: 'none',
            height: '1px',
            backgroundColor: '#ccc',
            }}
            />
        {/* 로고 및 링크 */}
        <div style={{
            width: '1350px',
            display: 'flex',
            padding: '20px 0 50px 0',
            justifyContent: 'space-between',
            alignItems: 'end',
            margin: '0 auto',
            }}>
            <div style={{ gridColumn: 1, display: 'flex', flexDirection:'column', gap: '20px' }}>
            {/* 로고 */}
            <h1 style={{ margin: 0 }}>
                <img src="/public/logo.svg" alt="로고" style={{ height:'25px', }}/>
            </h1>

            {/* 링크 목록 */}
            <div style={{ display:'flex', gap: '20px' }}>
                <Link to="/login" style={{ color: 'black', fontSize: '15px' }} >공지사항</Link>
                <Link to="/login" style={{ color: 'black', fontSize: '15px' }} >이용약관</Link>
                <Link to="/login" style={{ color: 'black', fontSize: '15px' , fontWeight: 'bold'}} >개인정보처리방침</Link>
                <Link to="/login" style={{ color: 'black', fontSize: '15px' }} >오시는 길</Link>
                <Link to="/login" style={{ color: 'black', fontSize: '15px' }} >FAQ</Link>
                <Link to="/login" style={{ color: 'black', fontSize: '15px' }} >문의하기</Link>
                <Link to="/login" style={{ color: 'black', fontSize: '15px' }} >환불규정</Link>
            </div>

            {/* 회사 정보 */}
            <div>
                <p style={{ fontSize: '13px', margin: '0 0 5px 0', color: 'rgb(155, 155, 155)' }}>
                회사명: 배우다(주) ｜ 대표: 홍지원, 이주영 ｜ 사업자등록번호 123-45-67890 ｜
                서울시 영등포구 여의도동 12-3 빌딩 ｜
                </p>
                <p style={{ fontSize: '13px', margin: 0, color: 'rgb(155, 155, 155)' }}>
                대표전화: 070-1234-5678 ｜ 이메일: asd@fghjk.co.kr
                </p>
            </div>
            </div>

            {/* 소셜 버튼들 (노, 피, 깃) */}
            <div style={{ gridColumn: 2, display: 'flex', justifyContent: 'end', gap: '10px',  }}>
                <Link to="/login" style={{ display: 'inline-block',}}>
                    <img
                    src="/icons/heart.svg"
                    alt="찜하기"
                    style={{
                        width: '28px',
                        height: '28px',
                        display: 'block',
                        backgroundColor: '#ccc',
                        borderRadius: '50px',
                        padding: '10px',
                    }}
                    />
                </Link>
                                <Link to="/login" style={{ display: 'inline-block' }}>
                    <img
                    src="/icons/heart.svg"
                    alt="찜하기"
                    style={{
                        width: '28px',
                        height: '28px',
                        display: 'block',
                        backgroundColor: '#ccc',
                        borderRadius: '50px',
                        padding: '10px',
                    }}
                    />
                </Link>
                                <Link to="/login" style={{ display: 'inline-block' }}>
                    <img
                    src="/icons/heart.svg"
                    alt="찜하기"
                    style={{
                        width: '28px',
                        height: '28px',
                        display: 'block',
                        backgroundColor: '#ccc',
                        borderRadius: '50px',
                        padding: '10px',
                    }}
                    />
                </Link>
            </div>
        </div>
</footer>

  )
}

export default Footer