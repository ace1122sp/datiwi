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
// TODO: kada preuzmes init state, moras da uzmes activity units za plan i da ih
//sortiras na client side prema njihovom time start
//server ce ti poslati arr sa activity units koje nece biti sortirane

// TODO: database ce da vodi evidenciju samo o planu koji je kreiran, sto znaci da
// plan koji se sastavlja nece biti sacuvan ako se refreshuje strana
//sa klikom na submit(u delu gde sastavljas plan) plan se kreira i tada se salje
//post req database-u 
render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
