import React, { useState, useEffect } from 'react';

import NavigationCSS from '../styles/NavigationCSS.css';

const Navigation = () => {
  return (
    <>
      <img className='mask' src='https://i.imgur.com/HSJ5XRp.jpg' />
      <div className='nav-wrapper'>
        <div className='main-navigation'>
          {/* <div className='current-show'>
            <h2>ASSASSINS</h2>
            <p>FEB 5 - FEB 21</p>
          </div> */}
          <div className='navigation-items'>
            <div className='current-show'>
              <h2>ASSASSINS</h2>
              <p>FEB 5 - FEB 21</p>
            </div>
            <h3>HOME</h3>
            <h3>ABOUT</h3>
            <h3>GET INVOLVED</h3>
          </div>
        </div>
      </div>
    </>
    // <div className='navigation'>
    //   <div className='mask'>
    //     <img src='https://i.imgur.com/3ObOUI4.jpg' />
    //     {/* <i class='fab fa-facebook-f'></i>
    //     <i class='fab fa-twitter'></i>
    //     <i class='fab fa-instagram'></i>
    //     <i class='fab fa-youtube'></i> */}
    //   </div>
    //   <div className='main-nav'>
    //     <div className='cur-show'>
    //       <h2>ASSASSINS</h2>
    //       <p>FEB 5 - FEB 21</p>
    //     </div>
    //     <div className='nav-items'>
    //       <h3>HOME</h3>
    //       <h3>ABOUT</h3>
    //       <h3>GET INVOLVED</h3>
    //       <h3>OTHER</h3>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navigation;
