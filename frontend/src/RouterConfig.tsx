import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './tsx/pages/Login';

const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="page1" element={<Login />} />
        <Route path="page2" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export {RouterConfig};
