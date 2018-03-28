import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const root = document.getElementById('root');
let store = createStore(rootReducer, applyMiddleware(thunk));

//to validate: make sure to get only latest 30 day efficiency history
render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
