import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { Footer } from '../component/molecules/Footer';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        About
        </p>
        <Footer />
      </header>
    </div>
  );
}

export default About;
