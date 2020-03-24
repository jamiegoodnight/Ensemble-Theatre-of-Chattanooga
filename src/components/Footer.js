import React, { useState, useEffect } from 'react';

import FooterCSS from '../styles/FooterCSS.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top-wrapper'>
        <div className='footer-top'>
          <img src='https://i.imgur.com/mxX1gl9.png' alt='ETC'/>
          <div className='footer-contact'>
            <h4>CONTACT</h4>
            <p>423-987-5141</p>
            <p>ensemble.theatre.chattanooga@gmail.com</p>
            <p>3803 Monte Vista, Chattanooga, TN 37411</p>
          </div>
          <div></div>
        </div>
        <div>
          <div className='social-icons'>
            <a
              href='https://www.facebook.com/EnsembleTheatreOfChattanooga/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
            <a
              href='https://twitter.com/etofc'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              href='https://www.instagram.com/ensemble_theatre_of_chatt/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              href='https://www.youtube.com/user/ETCgarry/featured'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-youtube'></i>
            </a>
            <a
              href='https://www.patreon.com/ETChattanooga'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-patreon'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <i className='fas fa-copyright'></i>
        <h5>2020 Ensemble Theatre of Chattanooga, Inc</h5>
      </div>
    </div>
  );
};

export default Footer;
