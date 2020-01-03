import React from 'react';
import Button from 'react-bootstrap/Button';

import AudienceCSS from '../styles/AudienceCSS.css';

const Executive = () => {
  return (
    <div className='aud-wrapper2'>
      {/* <div className='aud-bg-chr'></div> */}
      <div className='aud-title'>
        <h3 className='aud-text-h3'>Who you are</h3>
        <p>
          We are so grateful to each and every audience member who comes to see
          our shows. Whether you're a first-timer or you've been watching us
          since the beginning—thank you! We especially want to recognize our
          very generous donors and community partners who have helped make ETC
          possible.
        </p>
        <i class='fas fa-arrow-down'></i>
        {/* <Button
          className='btn'
          variant='dark'
          href='https://drive.google.com/open?id=1JQ3HwfNs6WGLxsm8CIcm19Bkd2X1h3eG'
          target='_blank'
        >
          <h5>Donors</h5>
        </Button> */}
      </div>
      <div className='aud-bg'></div>
      {/* <div className='aud-title-wrapper'>
        <h3 className='aud-h3'>EXECUTIVE ENSEMBLE</h3>
      </div> */}
    </div>
  );
};

export default Executive;
