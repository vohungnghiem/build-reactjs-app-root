import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
//import 'regenerator-runtime/runtime'; // import to run in webpack 4
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootSaga from './_stores/root_saga';
import rootReducer from './_stores/root_reducer';
import { Provider } from 'react-redux';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(sagaMiddleware, createLogger)
)
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));

