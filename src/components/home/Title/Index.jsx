import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';
import Category from './Category';

const TitleSection = () => {
  return (
    // <TitleMain>
      <TitleWrapper>
        <FixedTopLinks>
          <StyledLink to="/cart">
            <img src="/icons/cart.svg" alt="장바구니" style={{ width: '28px', height: '28px' }} />
          </StyledLink>
          <StyledLink to="/heart">
            <img src="/icons/heart.svg" alt="찜목록" style={{ width: '28px', height: '28px', marginLeft: '3px' }} />
          </StyledLink>
          <StyledLink to="/login">
            <img src="/icons/login.svg" alt="로그인" style={{ width: '25px', height: '28px' }} />
          </StyledLink>
        </FixedTopLinks>

        <TitleContainer>
          <Title />
          <Category />
        </TitleContainer>
      </TitleWrapper>
    // </TitleMain>
  );
};

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 30px;
`;

const FixedTopLinks = styled.div`
  position: absolute;
  top: 30px;
  right: 16%;
  display: flex;
  gap: 14px;
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover img {
  }
`;

export default TitleSection;
