import React from 'react';
import ReactPlayer from 'react-player';

import MediaCSS from '../styles/MediaCSS.css';

const Media = () => {
  return (
    <div className='media-wrapper'>
      <div className='media-video'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=bW6vYieo60k'
          className='video'
        />
      </div>
      <div className='media-soundcloud'></div>
    </div>
  );
};

export default Media;
