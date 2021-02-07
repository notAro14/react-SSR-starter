import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const isDevMode = process.env.NODE_ENV === 'development';
const render = isDevMode ? ReactDOM.render : ReactDOM.hydrate;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
