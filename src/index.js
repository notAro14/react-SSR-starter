import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ContextProvider from './ContextProvider';

const isDevMode = process.env.NODE_ENV === 'development';
const render = isDevMode ? ReactDOM.render : ReactDOM.hydrate;

let value = {};
if (window && window.initialData) {
  value = window.initialData;
}

render(
  <BrowserRouter>
    <ContextProvider value={value}>
      <App />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
