import React, { useState, useEffect } from 'react';

import NavigationCSS from '../styles/NavigationCSS.css';

const Navigation = (props) => {
  const activate = () => {
    props.setActive(!props.active);
  };
  return (
    <>
      <img
        className='mask'
        src='https://i.imgur.com/HSJ5XRp.jpg'
        alt='ETC mask logo'
      />
      <div className='nav-wrapper'>
        <i
          onClick={() => activate()}
          className={props.active === true ? 'fas fa-times' : 'fas fa-bars'}
          id='bars'
        ></i>
        <div className='main-navigation'>
          <div className='navigation-items'>
            <a
              className='a-cur-show'
              href='https://etoc.booktix.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* <div className='current-show'>
                <h2>Forbidden Broadway</h2>
                <div className='cur-show-inner'>
                  <p>March 5-7 &#8226;</p>
                  <i className='fas fa-ticket-alt'></i>
                </div>
              </div> */}
            </a>
            <a href='https://www.onthestage.tickets/show/ensemble-theatre-of-chattanooga/she-kills-monsters-38846'
             target="_blank"
             rel='noopener nofeferrer'
             class='now-playing'>
            <h3>NOW</h3>
          </a>
            {/* <a href='#Home'>
              <h3>HOME</h3>
            </a>
            <a href='#About'>
              <h3 className='about-nav'>ABOUT</h3>
            </a> */}
            <a href='https://anchor.fm/etchattanooga'
              target="_blank"
              rel='noopener nofeferrer'>
              <h3 className='pod-nav'>PODCAST</h3>
            </a>
            <a href='https://join.slack.com/t/ensembletheat-4ts4782/shared_invite/zt-12ugkghys-B6bNTbkNwi_AO9_VsPw2ig'>
              <h3>COMMUNITY</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
