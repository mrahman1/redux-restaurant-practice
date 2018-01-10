import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import restaurantReducer from './reducers/restaurantReducer'
import {Provider} from 'react-redux'

let store = createStore(restaurantReducer)

console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'));
registerServiceWorker();
