import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Home from './screens/Home';
import About from './screens/About';
import GetInvolved from './screens/GetInvolved';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className='constrainer'>
        <Navigation />
        <Home></Home>
        <About></About>
        <GetInvolved></GetInvolved>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
