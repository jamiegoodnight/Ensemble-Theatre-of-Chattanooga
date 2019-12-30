import React, { useState, useEffect } from 'react';

const HomeShows = () => {
  return (
    <div className='homeshows-wrapper'>
      <div className='row'>
        <div className='show-wrapper-one'>
          <div className='show-one'></div>
        </div>
        <div className='show-wrapper-two'>
          <div className='show-two'></div>
        </div>
      </div>
      <div className='row'>
        <div className='show-wrapper-three'>
          <div className='show-three'></div>
        </div>
        <div className='show-wrapper-four'>
          <div className='show-four'></div>
        </div>
      </div>
      <div className='row'>
        <div className='show-wrapper-five'>
          <div className='show-five'></div>
        </div>
        <div className='show-wrapper-six'>
          <div className='show-six'></div>
        </div>
      </div>
    </div>
  );
};

export default HomeShows;
