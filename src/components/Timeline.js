import React from 'react';

import TimelineCSS from '../styles/TimelineCSS.css';

const Timeline = () => {
  return (
    <div className='tl-container'>
      <div className='tl-box-container'>
        <div className='tl-box'>
          <div className='inner-box box-1'>
            <i class='fas fa-theater-masks'></i>
            <h4>Dynamic, unique</h4>
            <p>
              We strive to create experiences for our audiences and artists that
              engage the imagination, evaluate the human experience, and
              encourage conversation.
            </p>
          </div>
        </div>
        <div className='tl-box'>
          <div className='inner-box box-2'>
            <i class='fas fa-dollar-sign'></i>
            <h4>Paying artists</h4>
            <p>
              Ensemble Theatre of Chattanooga is Chattanooga's only theatre with
              a goal of providing artists with financial compensation.
            </p>
          </div>
        </div>
        <div className='tl-box box-2'>
          <div className='inner-box box-3'>
            <i class='fas fa-hands-helping'></i>
            <h4>Part of a whole</h4>
            <p>
              Our vision is to generously contribute to the cultural landscape
              by cultivating new works, artists, and patrons, providing
              comprehensive educational programs, and collaborating on community
              outreach projects.
            </p>
          </div>
        </div>
      </div>
      {/* <div className='tl-box-container c2'>
        <div className='tl-box'>
          <div className='inner-box box-1'>
            <i class='fas fa-people-carry'></i>
            <h4>Some friends</h4>
            <p>
              ArtsBuild | Community Foundation of Greater Chattanooga |
              Chattanooga Autism Center | Medical Foundation of Chattanooga |
              Reflection Riding Arbortoreum and Nature Center
            </p>
          </div>
        </div>
        <div className='tl-box box-2'>
          <div className='inner-box box-2'>
            <i class='fas fa-hands-helping'></i>
            <h4>Part of a whole</h4>
            <p>
              Our vision is to generously contribute to the cultural landscape
              by cultivating new works, artists, and patrons, providing
              comprehensive educational programs, and collaborating on community
              outreach projects.
            </p>
          </div>
        </div>
        <div className='tl-box box-2'>
          <div className='inner-box box-3'>
            <i class='fas fa-hands-helping'></i>
            <h4>Part of a whole</h4>
            <p>
              Our vision is to generously contribute to the cultural landscape
              by cultivating new works, artists, and patrons, providing
              comprehensive educational programs, and collaborating on community
              outreach projects.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

// const Timeline = () => {
//   return (
//     <div className='timeline-wrapper'>
//       <div className='who-are-we'>
//         <h3>Who are we</h3>
//         <p>
//           Ensemble Theatre of Chattanooga is Chattanooga's only theatre with a
//           goal of providing artists with financial compensation.
//         </p>
//         <p>
//   We strive to create dynamic and unique experiences for our audiences
//   and artists by producing shows that engage the imagination, evaluate
//   the human experience, and encourage conversation.
//         </p>
//       </div>
//       {/* <div className='tl-segment tl-rom'></div>
//       <div className='tl-segment tl-fal'></div>
//       <div className='tl-segment tl-jek'></div>
//       <div className='tl-segment tl-cat'></div>
//       <div className='tl-segment tl-about'></div> */}
//       {/* <div className='who-are-we'>
//         <h3>Who are we</h3>
//         <p>
//           Ensemble Theatre of Chattanooga is Chattanooga's only theatre with a
//           goal of providing artists with financial compensation.
//         </p>
//         <p>
//           We strive to create dynamic and unique experiences for our audiences
//           and artists by producing shows that engage the imagination, evaluate
//           the human experience, and encourage conversation.
//         </p>
//       </div> */}
//     </div>
//   );
// };

export default Timeline;

//
//
//
//

// import React from 'react';

// import TimelineCSS from '../styles/TimelineCSS.css';

// const Timeline = () => {
//   return (
//     <div className='timeline-wrapper'>
//       <div className='timeline-segment'>
//         <img className='rectangle-left' src='https://i.imgur.com/668QPVA.png' />
//         <div className='rom-wrapper'>
//           <h4>Romeo and Juliet</h4>
//         </div>
//         <h5>2010</h5>
//         <div className='quote-rj'>
//           <p>
//             "Romeo and Juliet really identified in a production the
//             collaborative and creative nature that I'd like for us to be known
//             for."{' '}
//           </p>
//           <div className='about-rj'>
//             <h3>Who are we</h3>
//             <p>
//               Ensemble Theatre of Chattanooga is Chattanooga's only theatre with
//               a goal of providing artists with financial compensation.
//             </p>
//             <p>
//               We strive to create dynamic and unique experiences for our
//               audiences and artists by producing shows that engage the
//               imagination, evaluate the human experience, and encourage
//               conversation.
//             </p>
//           </div>
//         </div>
//         <img className='img2' src='https://i.imgur.com/cb8xW7Y.png'></img>
//       </div>
//       <div className='timeline-segment'>
//         <img className='img2-1' src='https://i.imgur.com/bdr7c3f.png' />
//         <img className='img2-2' src='https://i.imgur.com/ifcATgI.png' />
//         <h5 className='h52'>2012</h5>
//         <div className='quote-fal'>
//           <p>
//             "Falsettos set our standard for depth of sincerity and honest
//             performance."{' '}
//           </p>
//         </div>
//         <div className='quote-jek'>
//           <p>
//             "Jekyll & Hyde was easily the most experiential musical we have
//             attempted thus far."{' '}
//           </p>
//         </div>
//         <h5 className='h53'>2013</h5>
//         <div className='fal-quote'>
//           <p></p>
//         </div>
//         <h4 className='h42'>Falsettos</h4>
//         <h4 className='h43'>Jeykll & Hyde</h4>
//       </div>
//       <div className='timeline-segment'>
//         <img className='img3-1' src='https://i.imgur.com/WNTsxLS.png' />
//         <div className='cat-wrapper'>
//           <h4 className='h44'>Cat on a Hot Tin Roof </h4>
//         </div>
//         <h5 className='h54'>2017</h5>
//         <div className='quote-cat'>
//           <p>
//             "Cat on a Hot Tin Roof had the strongest ensemble of just about any
//             show we have ever produced."
//           </p>
//         </div>
//         <div className='about-cat'>
//           <h3>Our Vision</h3>
//           <p>
// Our vision is to exist as a regionally recognized professional
// theatre and to generously contribute to the cultural landscape by
// cultivating new works, artists, and patrons, providing comprehensive
// educational programs, and collaborating on community outreach
// projects.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

//
//
//
