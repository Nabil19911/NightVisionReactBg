import React from 'react';
import ReactDOM from 'react-dom'

import './compnents/css/style.css'
import "./compnents/js/app"
import MainSection from './compnents/JXS/main'

const main =   document.getElementById('header-conatiner');

ReactDOM.render(
  <React.StrictMode>
    <MainSection />
  </React.StrictMode>,
  main,
);