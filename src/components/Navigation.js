import React, { useState, useEffect } from 'react';

import NavigationCSS from '../styles/NavigationCSS.css';

const Navigation = props => {
  const activate = () => {
    props.setActive(!props.active);
  };
  return (
    <>
      <img className='mask' src='https://i.imgur.com/HSJ5XRp.jpg' />
      <div className='nav-wrapper'>
        <i
          onClick={() => activate()}
          class={props.active === true ? 'fas fa-times' : 'fas fa-bars'}
          id='bars'
        ></i>
        <div className='main-navigation'>
          <div className='navigation-items'>
            <div className='current-show'>
              <h2>ASSASSINS</h2>
              <p>FEB 5 - FEB 21</p>
            </div>
            <a href='#Home'>
              <h3>HOME</h3>
            </a>
            <a href='#About'>
              <h3>ABOUT</h3>
            </a>
            <a href='#Get-Involved'>
              <h3>GET INVOLVED</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
