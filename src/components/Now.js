import React from 'react';

import NowCSS from '../styles/NowCSS.css';

const Now = () => {
  return (
    <>
    <div className='now-wrapper'>
      <div className='now-img'></div>
      <div className='now-text'>
        <h2>FROZEN</h2>
        <h3>by Bryony Lavery</h3>
        <p>Ensemble Theatre of Chattanooga next presents the award-winning play FROZEN by Bryony Lavery. "One evening ten-year old Rhona goes missing. As her mother retreats into a state of frozen hope, a psychologist studies the brain of a serial killer to find out if what he does is pure evil or simply beyond his control. Drawn together by horrific circumstances, these three embark on a long, dark journey that ends in the discovery of a common humanity." </p>
        <p>Directed by Ensemble Theatre of Chattanooga veteran Bruce Shaw. Don't forget to follow us on Facebook, Twitter, and Instagram for updates on the cast, crew, and more.</p>
        <p className='corona-p'>*Ensemble Theatre of Chattanooga cares about the health and safety of our staff, actors, and patrons and your safety is our top priority. In light of recent events and announcements, ETC will be postponing Shades of a Spectrum, the kickoff inaugural production from The Spectrum Playhouse, to a date yet to be determined.
Currently, there are no other changes to our production schedule. Stay tuned to our website, Facebook and other social media for more information as we have it.</p>
      </div>
    </div>
    <div className='divider'></div>
    </>
  );
};

export default Now;