import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Home from './screens/Home';
import About from './screens/About';
import GetInvolved from './screens/GetInvolved';
import Media from './screens/Media';
import Community from './screens/Community';
import Footer from './components/Footer';
import Ensemble from './components/Ensemble';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className='constrainer'>
        <Navigation />
        <Ensemble></Ensemble>
              {/* <Home></Home>
        <About></About>
        <Community></Community>
        <GetInvolved></GetInvolved> */}
        {/* <Community></Community> */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
