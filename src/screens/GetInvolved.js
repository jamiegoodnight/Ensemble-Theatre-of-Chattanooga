import React from 'react';

import GetInvolvedCSS from '../styles/GetInvolvedCSS.css';

const GetInvolved = () => {
  return (
    <div className='GI-wrapper'>
      <div className='buffer'></div>
      <div className='GI-div auditions'>
        <div className='GI-inner-div auditions-image'>
          <h3 className='white-h3 dir-text-1'>AUDITIONS</h3>
          <h3 className='white-h3 dir-text-2'>AUDITIONS</h3>
          <h3 className='white-h3 dir-text-3'>AUDITIONS</h3>
          <h3 className='white-h3 dir-text-4'>AUDITIONS</h3>
        </div>
        <div className='GI-inner-div auditions-text'>
          {/* <i class='fas fa-theater-masks'></i> */}
          <div className='text-box'>
            <h1>AUDITIONS</h1>
            <h2>
              Get on stage at ETC! Audition to join our awesome ensemble of
              actors and help us make great theatre! You can check here for
              casting notices, but make sure you never miss out by following us
              on social media too.
            </h2>
          </div>
        </div>
      </div>
      <div className='GI-div designing'>
        <div className='GI-inner-div designing-text'>
          <div className='text-box'>
            <h1>DESIGNING</h1>
            <h2>
              Make cool stuff for us! Good design can transport audiences (and
              actors!) to old Georgia manor houses, cramped apartments, and
              bloody battlefields. Watch this space to find out when we're
              looking for designers or email us if you've got good ideas and
              need a stage to use 'em!
            </h2>
          </div>
          {/* <i class='fas fa-tools'></i> */}
        </div>
        <div className='GI-inner-div designing-image'>
          <h3 className='white-h3 dir-text-1'>DESIGNING</h3>
          <h3 className='white-h3 dir-text-2'>DESIGNING</h3>
          <h3 className='white-h3 dir-text-3'>DESIGNING</h3>
          <h3 className='white-h3 dir-text-4'>DESIGNING</h3>
        </div>
      </div>
      <div className='GI-div directing'>
        <div className='GI-inner-div directing-image'>
          <h3 className='white-h3 dir-text-1'>DIRECTING</h3>
          <h3 className='white-h3 dir-text-2'>DIRECTING</h3>
          <h3 className='white-h3 dir-text-3'>DIRECTING</h3>
          <h3 className='white-h3 dir-text-4'>DIRECTING</h3>
        </div>
        <div className='GI-inner-div directing-text'>
          {/* <i class='fas fa-bullhorn'></i> */}
          <div className='text-box'>
            <h1>DIRECTING</h1>
            <h2>
              Are you a leader, a story-teller, somebody with a vision? Then we
              want you to direct a show at ETC! Come back here to find out when
              there's an opportunity to direct one of our shows or contact us
              with a proposal you just can't wait to share!
            </h2>
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
              fundraisers!
            </h2>
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
