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
          A podcast that celebrates playwrights, performers and patrons. 
          Hosts Dana Colagiovanni and Christy Gallo introduce us to and 
          interview theatre artists and creatives while exploring the depths of 
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
          {/* <p>
            Ensemble Theatre of Chattanooga has decided to follow suit with arts
            organizations nation wide. As the pandemic unfolds, we believe it
            necessary for us to do our part in preventing exposure. With that in
            mind, FROZEN by Byrony Lavery will not be performed in April at the
            Barking Legs Theatre. Those that have already purchased your tickets
            will be sent an email with the option to request a refund. It is our
            intention to try and produce this intense story at some point later
            in the season, but the details of all of that have yet to be worked
            out.
          </p>

          <p>
            Thankfully, we are not panicked about our survival through this
            challenging time and we are confident that we will resume producing
            theatre in the Chattanooga area.
          </p>

          <p>
            In closing, I want to let you know that we are monitoring other
            organizations and theatrical producers to gain insight and ideas
            into how we can still provide our services in the current climate
            while still respecting any mandates put into place regarding social
            distancing, hygiene and sanitation practices. Please stay tuned,
            please stay safe, please stay well and please stay creative.
          </p>

          <p>
            Sincerely<br></br>
            The Executive Team of the Ensemble Theatre of Chattanooga
          </p> */}
        </div>
      </div>
      <div className='divider'></div>
    </>
  );
};

export default Now;
