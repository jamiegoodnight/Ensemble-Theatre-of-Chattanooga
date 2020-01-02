import React from 'react';

import ExecutiveCSS from '../styles/ExecutiveCSS.css';

const Executive = () => {
  return (
    <div className='exec-wrapper'>
      <h3 className='exec-h3'>
        Executive <span>Ensemble</span>
      </h3>
      <div className='execs'>
        <div className='exec'>
          <div className='gp hov'></div>
          <h4>Garry Lee Posey</h4>
        </div>
        <div className='exec'>
          <div className='jt hov'></div>
          <h4>John Thomas McCecil</h4>
        </div>
        <div className='exec'>
          <div className='ct hov'></div>
          <h4>Christy Tipton</h4>
        </div>
        <div className='exec'>
          <div className='js hov'></div>
          <h4>Joel Sanchez-Avantes</h4>
        </div>
        <div className='exec'>
          <div className='kc hov'></div>
          <h4>Kyle Coplen</h4>
        </div>
        <div className='exec'>
          <div className='ew hov'></div>
          <h4>Eric 'Red' Wyatt</h4>
        </div>
      </div>
    </div>
  );
};

export default Executive;
