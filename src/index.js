import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import './index.css';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {searchRobots,requestRobots} from './reducer'


const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots})

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
