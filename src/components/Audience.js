import React from 'react';
import Button from 'react-bootstrap/Button';

import AudienceCSS from '../styles/AudienceCSS.css';

const Executive = () => {
  return (
    <div className='aud-wrapper2'>
      <div className='aud-title'>
        <h3 className='aud-text-h3'>Who you are</h3>
        <p>
          We are so grateful to each and every audience member who comes to see
          our shows. Whether you're a first-timer or you've been watching us
          since the beginning—thank you! We especially want to recognize our
          very generous donors and community partners who have helped make ETC
          possible.
        </p>
        <i className='fas fa-arrow-down'></i>
      </div>
      <div className='aud-bg'></div>
    </div>
  );
};

export default Executive;
