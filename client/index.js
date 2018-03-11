import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const root = document.getElementById('root');
let store = createStore(rootReducer);

render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
