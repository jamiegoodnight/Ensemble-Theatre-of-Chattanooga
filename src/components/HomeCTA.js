import React, { useState, useEffect } from 'react';

const HomeCTA = () => {
  return (
    <div className='home-wrapper'>
      <div className='cta'>
        {/* --- */}
        <div className='logo-wrapper'></div>
        {/* --- */}
        <div className='divider'></div>
        {/* --- */}
        <div className='events-wrapper'>
          <div className='event-wrapper'>
            <div className='event-date'>
              <h3>THU</h3>
              <div className='event-divider'></div>
              <h3>FEB 6</h3>
            </div>
            <div className='event-info'></div>
            <div className='event-image'></div>
          </div>
          <div className='event-wrapper'>
            <div className='event-date'>
              <h3>THU</h3>
              <div className='event-divider'></div>
              <h3>FEB 6</h3>
            </div>
            <div className='event-info'></div>
            <div className='event-image'></div>
          </div>
          <div className='event-wrapper'>
            <div className='event-date'>
              <h3>THU</h3>
              <div className='event-divider'></div>
              <h3>FEB 6</h3>
            </div>
            <div className='event-info'></div>
            <div className='event-image'></div>
          </div>
          {/* --- */}
        </div>
        {/* --- */}
      </div>
      {/* --- */}
    </div>
  );
};

export default HomeCTA;
