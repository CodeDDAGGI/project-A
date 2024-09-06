import './App.css';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SlidingBanner from './components/SlidingBanner/SlidingBanner';
import PoliticsPage from './pages/PoliticsPage/PoliticsPage';
import HomePageLayout from './components/HomePageLayout/HomePageLayout';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePageLayout />} />
          <Route path='/news/politics' element={<PoliticsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
