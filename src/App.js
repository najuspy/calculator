import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='split left'>
        <div className='centered'>
          <h6>Hi, I'm Sujan Pandey</h6>
          <h4>Calculator Made Using React</h4>
        </div>
      </div>


      <div className='split right'>
        <div className='centered'>
          <div className='display-box'>
            <div className='calculation-box'>
              1+3
            </div>

            <div className='output-box'>
              4
            </div>
          </div>

        </div>
      </div >
    </div>
  );
}

export default App;
