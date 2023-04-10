import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { Footer } from '../component/molecules/Footer';
function Work() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Work
        </p>
        <Footer />
      </header>
    </div>
  );
}

export default Work;
