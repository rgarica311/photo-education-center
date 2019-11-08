import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import './index.css'

library.add( fas );

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById( 'root' )
);
