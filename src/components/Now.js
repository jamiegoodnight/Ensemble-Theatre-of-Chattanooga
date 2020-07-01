import React from 'react';

import NowCSS from '../styles/NowCSS.css';

const Now = () => {
  return (
    <>
      <div className='now-wrapper'>
        <div className='now-img'></div>
        <div className='now-text'>
          <h2>10 X 10 X 10</h2>
          {/* <h3>—</h3> */}
          <p>
            We're producing our biggest, boldest virtual event yet! It's
            10x10x10! 10 nights. 10 plays. 10-ish minutes. 10 PM. $10 flexpass.
            That's right, there are more 10s then we could even fit in the
            title! Starting July 10th at 10 PM ET join Ensemble Theatre of
            Chattanooga for a viewing party where we get to hang out, catch a
            new 10 minute play, and keep theatre alive in Chattanooga—and across
            the country!
          </p>
          <p>
            Featuring Cody Keown, Autumn Allison, Zella Stockman, Jamie Kessler,
            Tris Haugh, Taylor Williams, Normand Caissie, Maggie Williams, Eric
            "Red" Wyatt, Michael Myers, Christopher Wilson, Tiffany Bulloch,
            Joel Sanchez-Avantes, Dani Clark, Courtenay Cholovich, Ed Huckabee,
            Garry Posey, and even more actors and playwrights!
          </p>
          <a
            className='tix-a'
            href='https://www.showtix4u.com/events/17228'
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
