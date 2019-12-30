import React, { useState, useEffect } from 'react';

import HomeShowsCSS from '../styles/HomeShowsCSS.css';

const HomeShows = () => {
  return (
    <div className='homeshows-wrapper'>
      <div className='row'>
        <div className='show-wrapper-one'>
          <div className='show-one pointer'>
            <p>Jeremy Wilkins as Caliban</p>
            <h3>THE TEMPEST</h3>
          </div>
        </div>
        <div className='show-wrapper-two'>
          <div className='show-two pointer'>
            <p>Joey Tipton as Katurian</p>
            <h3>THE PILLOWMAN</h3>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='show-wrapper-three'>
          <div className='show-three pointer'></div>
        </div>
        <div className='show-wrapper-four'>
          <div className='show-four pointer'>
            <div className='four-box'>
              <h3>THE</h3>
              <h3>SCARLET</h3>
              <h3>LETTER</h3>
            </div>
            <p>Apryl Kelli Hughes as Hester Prynne</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='show-wrapper-five'>
          <div className='show-five pointer'>
            <h3>OTHELLO</h3>
            <p>E'tienne Easley as Othello</p>
          </div>
        </div>
        <div className='show-wrapper-six'>
          <div className='show-six pointer'>
            <div className='six-box'>
              <p>Christy Tipton as Keely</p>
              <p>Kitty Reel as Du</p>
              <h3>KEELY AND DU</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShows;
