import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppBarNav from './components/appBar.js'


ReactDOM.render(
  <React.StrictMode>
    <AppBarNav />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
