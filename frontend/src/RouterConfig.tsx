import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from './tsx/pages/Top';
import About from './tsx/pages/About';
import Gallary from './tsx/pages/Gallary';
import Work from './tsx/pages/Work';

const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="About" element={<About />} />
        <Route path="Gallary" element={<Gallary />} />
        <Route path="Work" element={<Work />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export {RouterConfig};
