import React from 'react';

import SpectrumCSS from '../styles/SpectrumCSS.css';

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
        <div className="spec-show-wrapper">
            <div className='spec-show-logo'></div>
            <div className='spec-show-about'>
                <h3 className='spec-title'>Shades of a Spectrum</h3>
                <p className='spec-text'> Shades of a Spectrum is a devised theatre piece showcasing the stories of autistic kids, teens, and adults from our region. It is based on a series of interviews with 5 individuals on the autism spectrum ranging in age from 5 to 36. Those interviewed include Noah Phillips, Kennedy Doan, Christopher Brown, AJ Turner and
                    Juston Free. The cast also includes Renee Lierow, Laurie Shaw, Melissa Greene, Brooke Lowery McClellan and
                    Courtney Cholovich. The production is stage by ETC Creative Director and Founder, Garry Lee Posey.
                </p>
                <div className='spec-date-wrapper'>
                <p className='spec-text date'>POSTPONED &#8226;</p>
                <i className="fas fa-ticket-alt spec-ticket"></i>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Spectrum;