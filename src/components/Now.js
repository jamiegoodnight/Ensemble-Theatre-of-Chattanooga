import React from 'react';

import NowCSS from '../styles/NowCSS.css';

const Now = () => {
  return (
    <>
      <div className='now-wrapper'>
        <div className='now-img'></div>
        <div className='now-text'>
          <h2>A Message From ETC</h2>
          <h3>—</h3>
          <p>
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
          </p>
        </div>
      </div>
      <div className='divider'></div>
    </>
  );
};

export default Now;
