import { Link } from 'react-router-dom';
// const titleImg = '/images/title_img.jpg';
const titleImg = '/images/camera.png';


const Title = () => {
  return (
    <div style={{ width: '1350px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* 왼쪽 영역 */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ margin: 0 }}>
            <img src="/public/logo.svg" alt="로고" style={{ height:'49px', }}/>
          </h1>
          <p
            style={{
              color: '#254D72',
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '30px 0',
            }}
          >
            맞춤형 학습 관리를 지원하는<br />
            미래형 AI 코스웨어, AI 클래스
          </p>
          <input
            type="text"
            placeholder="어떤 강의를 찾으시나요?"
            style={{
              border: '2px solid #6FB4D2',
              borderRadius: '22px',
              padding: '18px 30px',
              fontSize: '15px',
              color: '#535455',
              fontWeight: 'bold',
              width: '77%',
              maxWidth: '640px',
            }}
          />
        </div>

        {/* 오른쪽 배너 영역 */}

        {/* <Link to="/cart">
        <img src="/icons/cart.svg" alt="장바구니" style={{ width: '28px', height: '28px' }} />
        </Link>
        <Link to="/heart">
        <img src="/icons/heart.svg" alt="찜목록" style={{ width: '28px', height: '28px' }} />
        </Link> */}
        

      </div>
    </div>
  );
};

export default Title;
