import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const root = document.getElementById('root');
let store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
