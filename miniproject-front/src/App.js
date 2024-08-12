import './App.css';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import Header from './components/Header/Header';
import SlidingBanner from './components/SlidingBanner/SlidingBanner';
import CalendarLayout from './components/CalendarLayout/CalendarLayout';
import ListLayout from './components/ListLayout/ListLayout';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <SlidingBanner />
      <MainLayout>
        <Routes>
          {/* <Route path={['/', '/news']} element={<></>} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register" element={<CalendarPage />} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
