import React from 'react';

import NowCSS from '../styles/NowCSS.css';

const Now = () => {
  return (
    <>
      <div className='now-wrapper'>
        <div className='now-img'></div>
        <div className='now-text'>
          <h2>Forbidden Broadway</h2>
          {/* <h3>—</h3> */}
          <p>
          In this long-running Off-Broadway hit musical revue, Broadway’s greatest musical 
          legends meet Broadway’s greatest satirist in this hilarious, loving, and endlessly 
          entertaining tribute to some of the theatre’s greatest stars and songwriters.
          </p>
          <p>
            Featuring Cody Keown, Jordan Otis, Jordan Bennett, John Thomas McCecil, 
            Taylor Williams, Maggie Williams, Chelsea Carboni, Dani Clark, Joseph Watts,
            Joel Sanchez-Avantes, Alssa Whitesell, Karley Moon, Jeffrey Parker, Michelle Ford,
            Paige Denton, Brenda Schwab, Beth McClary-Wolford, Ryan Laskowski, and Garry Lee Posey
          </p>
          <a
            className='tix-a'
            href='https://etoc.booktix.com'
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
