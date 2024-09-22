import './App.css';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import Footer from './components/Footer/Footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PoliticsPage from './pages/PoliticsPage/PoliticsPage';
import HomePageLayout from './components/HomePageLayout/HomePageLayout';
import SignupPage from './pages/SignupPage/SignupPage';
import WritePage from './pages/News/WritePage/WritePage';
import TestPage from './pages/News/WritePage/TestPage';
import { useQuery } from 'react-query';
import { instance } from './apis/util/instance';
import { useEffect, useState } from 'react';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const [authRefresh, setAuthRefresh ] = useState(true);

  useEffect(() => {
    if(!authRefresh) {
      setAuthRefresh(true);
    }
  }, [location.pathname])

  const accessTokenValid = useQuery(
    ["accessTokenValidQuery"],
    async () => {
      setAuthRefresh(false);
      return await instance.get("/auth/access", {
        params: {
          accessToken: localStorage.getItem("accessToken")
        }
      });
    },
    {
      enabled: authRefresh,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        const permitAllPaths = ["/auth"];
        for (let permitAllPath of permitAllPaths) {
          if (location.pathname.startsWith(permitAllPath)) {
            alert("잘못된 요청입니다.");
            navigate("/"); 
            break;
          }
        }
      },
    }
  );

  const userInfo = useQuery(
    ["userInfoQuery"],
    async () => {
      return await instance.get("/user/me");
    },
    {
      enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path='/' element={<HomePageLayout />} />
        <Route path='/news/politics' element={<PoliticsPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* 뉴스페이지 */}
        <Route path='/news/write' element={<WritePage />} />
        <Route path='/news/test' element={<TestPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
