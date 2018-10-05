import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const rootEl = document.getElementById('root');


  ReactDOM.render(<Root store={store}/>, rootEl);
});
