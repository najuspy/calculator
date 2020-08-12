import React, { useState, useEffect } from 'react';

import Information from './Components/Information';
import Calculator from './Components/Calculator'

import './App.css';

function App() {
  return (
    <div className='container'>
      <Information />
      <Calculator />
    </div>
  );
}

export default App;
