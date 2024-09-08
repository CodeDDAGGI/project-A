import './App.css';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PoliticsPage from './pages/PoliticsPage/PoliticsPage';
import HomePageLayout from './components/HomePageLayout/HomePageLayout';
import SignupPage from './pages/SignupPage/SignupPage';
import WritePage from './pages/News/WritePage/WritePage';
import TestPage from './pages/News/WritePage/TestPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePageLayout />} />
          <Route path='/news/politics' element={<PoliticsPage />} />
          <Route path="/news/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* 뉴스페이지 */}
          <Route path='/news/write' element={<WritePage />} />
          <Route path='/news/test' element={<TestPage />} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
