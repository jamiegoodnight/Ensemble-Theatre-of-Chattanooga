import React from 'react';
import Button from 'react-bootstrap/Button';

import GetInvolvedCSS from '../styles/GetInvolvedCSS.css';

const GetInvolved = () => {
  return (
    <div className='GI-wrapper'>
      <div className='buffer'></div>
      <div className='GI-div auditions'>
        <div className='GI-inner-div auditions-image'>
          <h3 className='white-h3 dir-text-1'>AUDITION</h3>
          <h3 className='white-h3 dir-text-2'>AUDITION</h3>
          <h3 className='white-h3 dir-text-3'>AUDITION</h3>
          <h3 className='white-h3 dir-text-4'>AUDITION</h3>
        </div>
        <div className='GI-inner-div auditions-text'>
          {/* <i class='fas fa-theater-masks'></i> */}
          <div className='text-box'>
            <h1>AUDITION</h1>
            <h2>
              Get on stage at ETC! Audition to join our awesome ensemble of
              actors and help us make great theatre! You can check here for
              casting notices, but make sure you never miss out by following us
              on social media too.
            </h2>
            <Button
              className='btn'
              variant='dark'
              href='https://drive.google.com/open?id=1JQ3HwfNs6WGLxsm8CIcm19Bkd2X1h3eG'
              target='_blank'
            >
              <h5>Audition</h5>
            </Button>
          </div>
        </div>
      </div>
      <div className='GI-div designing'>
        <div className='GI-inner-div designing-text'>
          <div className='text-box'>
            <h1>DESIGN</h1>
            <h2>
              Make cool stuff for us! Good design can transport audiences (and
              actors!) to old Georgia manor houses, cramped apartments, and
              bloody battlefields. Watch this space to find out when we're
              looking for designers or email us if you've got good ideas and
              need a stage to use 'em.
            </h2>
            <Button
              className='btn'
              variant='dark'
              href='https://drive.google.com/open?id=1UEwOlHS5T7y8otpNO9uHeyLrOtskh7PD'
              target='_blank'
            >
              <h5>Design</h5>
            </Button>
          </div>
          {/* <i class='fas fa-tools'></i> */}
        </div>
        <div className='GI-inner-div designing-image'>
          <h3 className='white-h3 dir-text-1'>DESIGN</h3>
          <h3 className='white-h3 dir-text-2'>DESIGN</h3>
          <h3 className='white-h3 dir-text-3'>DESIGN</h3>
          <h3 className='white-h3 dir-text-4'>DESIGN</h3>
        </div>
      </div>
      <div className='GI-div directing'>
        <div className='GI-inner-div directing-image'>
          <h3 className='white-h3 dir-text-1'>DIRECT</h3>
          <h3 className='white-h3 dir-text-2'>DIRECT</h3>
          <h3 className='white-h3 dir-text-3'>DIRECT</h3>
          <h3 className='white-h3 dir-text-4'>DIRECT</h3>
        </div>
        <div className='GI-inner-div directing-text'>
          {/* <i class='fas fa-bullhorn'></i> */}
          <div className='text-box'>
            <h1>DIRECT</h1>
            <h2>
              Are you a leader, a story-teller, somebody with a vision? Then we
              want you to direct a show at ETC! Come back here to find out when
              there's an opportunity to direct one of our shows or contact us
              with a proposal you just can't wait to share.
            </h2>
            <Button
              className='btn'
              variant='dark'
              href='https://drive.google.com/open?id=1ZuFwKn80VK9iNcIGzXCbVt8OHUy5BGfW'
              target='_blank'
            >
              <h5>Direct</h5>
            </Button>
          </div>
        </div>
      </div>
      <div className='GI-div volunteering'>
        <div className='GI-inner-div volunteering-text'>
          <div className='text-box'>
            <h1>SUPPORT</h1>
            <h2>
              ETC has been a part of the Chattanooga community for over a
              DECADE—and it's thanks to you! Follow us on social media, became a
              patron for as little $2 a month, or stop by one of our
              fundraisers.
            </h2>
            <div className='social-icons'>
              <a
                href='https://www.facebook.com/EnsembleTheatreOfChattanooga/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-facebook-f'></i>
              </a>
              <a
                href='https://twitter.com/etofc'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-twitter'></i>
              </a>
              <a
                href='https://www.instagram.com/ensembletheatreofchattanooga/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-instagram'></i>
              </a>
              <a
                href='https://www.youtube.com/user/ETCgarry/featured'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-youtube'></i>
              </a>
              <a
                href='https://www.patreon.com/ETChattanooga'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-patreon'></i>
              </a>
            </div>
          </div>
          {/* <i class='fas fa-hands-helping'></i> */}
        </div>
        <div className='GI-inner-div volunteering-image'>
          <h3 className='white-h3 dir-text-1'>SUPPORT</h3>
          <h3 className='white-h3 dir-text-2'>SUPPORT</h3>
          <h3 className='white-h3 dir-text-3'>SUPPORT</h3>
          <h3 className='white-h3 dir-text-4'>SUPPORT</h3>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;