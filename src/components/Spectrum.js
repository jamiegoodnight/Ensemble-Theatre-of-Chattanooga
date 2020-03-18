import React from 'react';

import SpectrumCSS from '../styles/NowCSS.css';

const Spectrum = () => {
  return (
    <div className='spec-wrapper'>
        <div className='spec-logo'></div>
        <div className='spec-about'>
            <h3 className='spec-title'>The Spectrum Playhouse</h3>
            <p className='spec-text'> The Spectrum Playhouse is the culmination of a partnership between Ensemble Theatre of Chattanooga and The Chattanooga Autism Center. It seeks to combine the resources, skills, and talents of both to create a new organization that combines
the performing arts and other forms of therapy into programs that create awareness, promote
inclusive experiences, and provide opportunities for both the neuro-diverse (autistic) community and
the neuro-typical (non-autistic) communities.</p>
        </div>
    </div>
  );
};

export default Spectrum;