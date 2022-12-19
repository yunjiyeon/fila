import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import ProductsAll from "./page/ProductsAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";
import Footer from "./components/Footer";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // 로그인 상태 구분 (처음엔 로그인 안 된 상태)

  useEffect(()=>{
  },[authenticate])
  return (
    <>
      <Navbar authenticate = {authenticate} setAuthenticate= {setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductsAll />} />
        <Route path="login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="product/:id" element={<PrivateRoute authenticate = {authenticate}/>} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
