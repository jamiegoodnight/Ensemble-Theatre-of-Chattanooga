// import React from 'react';

// import ExecutiveCSS from '../styles/ExecutiveCSS.css';

// const Executive = () => {
//   return (
//     <div className='exec-wrapper'>
//       <h3 className='exec-h3'>
//         Executive <span>Ensemble</span>
//       </h3>
//       <div className='execs'>
//         <div className='exec'>
//           <div className='gp hov'></div>
//           <h4>Garry Lee Posey</h4>
//         </div>
//         <div className='exec'>
//           <div className='jt hov'></div>
//           <h4>John Thomas McCecil</h4>
//         </div>
//         <div className='exec'>
//           <div className='ct hov'></div>
//           <h4>Christy Tipton</h4>
//         </div>
//         <div className='exec'>
//           <div className='js hov'></div>
//           <h4>Joel Sanchez-Avantes</h4>
//         </div>
//         <div className='exec'>
//           <div className='kc hov'></div>
//           <h4>Kyle Coplen</h4>
//         </div>
//         <div className='exec'>
//           <div className='ew hov'></div>
//           <h4>Eric 'Red' Wyatt</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Executive;

import React from 'react';

import ExecutiveCSS from '../styles/ExecutiveCSS.css';

const Executive = () => {
  return (
    <>
      <div className='ex-buffer'></div>
      <div className='exec-wrapper2'>
        <div className='exec-bg-chr'></div>
        <div className='ex-title'>
          <h3 className='text-h3'>Running the show</h3>
          <p>
            ETC's executive ensemble produces all of our shows. Garry Lee Posey
            founded ETC with John Thomas McCecil and Christy Tipton in 2007 and
            since then the executive ensemble has continued to grow!
          </p>
          <p>-</p>
          <p>
            Garry Lee Posey | John Thomas McCecil | Christy Tipton | Joel
            Sanchez-Avantez | Kyle Coplen | Eric 'Red' Wyatt
          </p>
        </div>
        <div className='exec-bg'></div>
        <div className='exec-title-wrapper'>
          <h3 className='ex-h3'>EXECUTIVE ENSEMBLE</h3>
        </div>
      </div>
    </>
  );
};

export default Executive;
