import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
