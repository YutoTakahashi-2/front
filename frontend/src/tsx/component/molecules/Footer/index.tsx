import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Footer() {
  return (
     <>
        <Link to={`/About`}>About</Link> 
        <Link to={`/Work`}>Work</Link>
        <Link to={`/`}>Top</Link>
        <Link to={`/Gallary`}>Gallary</Link>
    </>
  );
}

export {Footer};
