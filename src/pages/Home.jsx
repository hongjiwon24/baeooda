import styled from 'styled-components'
import TitleSection from '../components/home/Title'
import BestSection from '../components/home/Section1'
import NewSection from '../components/home/Section2'
import CourseTypeSection from '../components/home/Section3'
import Footer from '../components/common/Footer'
import Aside from '../components/common/Aside'

const Home = () => {
  return (
    <div className="home-wrapper">
      <SectionsWrapper>
        <TitleSection />
        <BestSection />
        <NewSection />
        <CourseTypeSection />
        <Footer />
      </SectionsWrapper>
      
      <Aside />
    </div>
  )
}

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 120px;
  margin-bottom: 120px;
`

export default Home