import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import { populateIndicatorDetailsAsync } from './actions'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

require('dotenv').config()

let store = createStore(reducers, applyMiddleware(logger, thunk))

store.dispatch(populateIndicatorDetailsAsync());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
