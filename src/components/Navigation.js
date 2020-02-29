import React, { useState, useEffect } from 'react';

import NavigationCSS from '../styles/NavigationCSS.css';

const Navigation = props => {
  const activate = () => {
    props.setActive(!props.active);
  };
  return (
    <>
      <img className='mask' src='https://i.imgur.com/HSJ5XRp.jpg' alt='ETC mask logo' />
      <div className='nav-wrapper'>
        <i
          onClick={() => activate()}
          class={props.active === true ? 'fas fa-times' : 'fas fa-bars'}
          id='bars'
        ></i>
        <div className='main-navigation'>
          <div className='navigation-items'>
            <a className='a-cur-show' href="https://www.artful.ly/ensemble-theatre-of-chattanooga/store/events/19935" target="_blank" rel='noopener noreferrer'>
            <div className='current-show'>
              <h2>FROZEN</h2>
              <div className='cur-show-inner'>
              <p>APR 10 - APR 18 &#8226;</p>
              <i className="fas fa-ticket-alt"></i>
              </div>
            </div>
            </a>
            <a href='#Home'>
              <h3>HOME</h3>
            </a>
            <a href='#About'>
              <h3 className='about-nav'>ABOUT</h3>
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
