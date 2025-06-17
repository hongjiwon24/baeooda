import styled from 'styled-components'
import TitleSection from '../components/home/Title'
import BestSection from '../components/home/Section1'
import NewSection from '../components/home/Section2'
import ComingSoonSection from '../components/home/Section3'
import CourseTypeSection from '../components/home/Section4'
import Footer from '../components/common/Footer'
import Aside from '../components/common/Aside'

const Home = () => {
  return (
    <div className="home-wrapper">
      <TitleSection />
      <SectionsWrapper>
        <BestSection />
        <NewSection />
        <ComingSoonSection />
        <CourseTypeSection />
      </SectionsWrapper>
      <Footer />
      <Aside />
    </div>
  )
}

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 130px;
  margin-bottom: 120px;
`

export default Home