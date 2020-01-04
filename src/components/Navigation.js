import React, { useState, useEffect } from 'react';

import NavigationCSS from '../styles/NavigationCSS.css';

const Navigation = () => {
  return (
    <>
      <img className='mask' src='https://i.imgur.com/HSJ5XRp.jpg' />
      <div className='nav-wrapper'>
        <div className='main-navigation'>
          <div className='navigation-items'>
            <div className='current-show'>
              <h2>ASSASSINS</h2>
              <p>FEB 5 - FEB 21</p>
            </div>
            <h3>HOME</h3>
            <h3>ENSEMBLE</h3>
            <h3>GET INVOLVED</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
