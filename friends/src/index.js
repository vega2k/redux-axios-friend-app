import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import '../src/styles/index.css'
import App from '../src/components/App';
import { friendReducer } from '../src/reducers'

//Store 생성 (thunk, logger Middleware 적용해서 )
const store = 

ReactDOM.render(
    <App />
, document.getElementById('root'));
