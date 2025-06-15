import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import CourseList from '../pages/CourseList';
import CoursedetailPage from '../pages/CoursedetailPage.jsx';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Router() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        {/* 홈은 헤더 없이 단독 */}
        <Route path="/" element={<Home />} />

        {/* 연결 페이지들은 헤더 포함 (DefaultLayout) */}
        <Route element={<DefaultLayout />}>

          {/* 헤더 연결 페이지 */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />

          {/* 카테고리 연결 페이지 */}
          <Route path="/CourseList" element={<CourseList />} />
          <Route path="/courses/:main/:sub" element={<CourseList />} />
          <Route path="/courses/:title" element={<CoursedetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

