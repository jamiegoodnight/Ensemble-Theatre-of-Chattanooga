import React from 'react';

import Navigation from './components/Navigation';
import Home from './screens/Home';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Navigation />
      <Home></Home>
    </div>
  );
}

export default App;
