import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Home from './screens/Home';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Navigation />
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;
