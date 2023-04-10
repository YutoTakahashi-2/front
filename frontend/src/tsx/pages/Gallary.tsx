import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { Footer } from '../component/molecules/Footer';
function Gallary() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Gallary
        </p>
        <Footer />
      </header>
    </div>
  );
}

export default Gallary;
