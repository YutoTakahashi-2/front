import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { Footer } from '../component/molecules/Footer';
import { Button } from '../component/atoms/Button';
import { Box } from '@material-ui/core';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        About
        </p>
        <Box sx={{bgcolor:'#112233',
                  width:'20px',
                  height:'20px'}}>
          box
        </Box>
        <Button />
        <Footer />
      </header>
    </div>
  );
}

export default About;
