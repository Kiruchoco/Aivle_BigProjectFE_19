import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NotFound from './NotFound';

import { Header, Footer, PrivateRoute } from './components';
import Temp from './Temp';
import Main from './pages/main/Main';
import Info from './pages/info/Info';
import LoginPage from './pages/account/LoginPage/LoginPage';
import SignupPage from './pages/account/SignupPage/SignupPage';
import RankPage from './pages/rank/RankPage';

function App() {
  const [isLogin, setIsLogin] = useState(false); // 개발 중 편의를 위해 true로 설정

  return (
    <div className="App">
      <NextUIProvider>
      <BrowserRouter>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />

        <Routes>
          {/* 로그인 O -> Main, 로그인 X -> Info(소개페이지) */}
          <Route path="/" element={<PrivateRoute isThatTrue={isLogin} isTrue={<Main />} isFalse={<Info />} />}></Route>
          <Route path="/quiz/:key" element={<PrivateRoute isThatTrue={isLogin} isTrue={<Main />} isFalse={<Info />} />}></Route>
          <Route path="/login" element={<LoginPage setIsLogin={setIsLogin} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Main />} />
          <Route path="/rank" element={<RankPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </NextUIProvider>
    </div>
  );
}

export default App;
