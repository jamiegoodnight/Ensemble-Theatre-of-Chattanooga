import React from 'react';

import NowCSS from '../styles/NowCSS.css';

const Now = () => {
  return (
    <>
      <div className='now-wrapper'>
        <div className='now-img'></div>
        <div className='now-text'>
          <h2>LIGHTS UP!</h2>
          {/* <h3>—</h3> */}
          <p>
            A podcast that celebrates playwrights, performers and patrons. Hosts
            Dana Colagiovanni and Christy Gallo introduce us to and interview
            theatre artists and creatives while exploring the depths of
            storytelling and imagination of several playwrights you might never
            have heard of... yet.
          </p>
          {/* <p>
            Featuring Cody Keown, Autumn Allison, Zella Stockman, Jamie Kessler,
            Tris Haugh, Taylor Williams, Normand Caissie, Maggie Williams, Eric
            "Red" Wyatt, Michael Myers, Christopher Wilson, Tiffany Bulloch,
            Joel Sanchez-Avantes, Dani Clark, Courtenay Cholovich, Ed Huckabee,
            Garry Posey, and even more actors and playwrights!
          </p> */}
          <a
            className='tix-a'
            href='https://anchor.fm/etchattanooga'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='tix-button'>
              <i className='fas fa-ticket-alt'></i>
            </div>
          </a>
        </div>
      </div>
      <div className='divider'></div>
    </>
  );
};

export default Now;
