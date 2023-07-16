import React from 'react';
import ReactDOM from 'react-dom';

// initializing redux store
import { Provider } from 'react-redux'; 
// //import { createStore, applyMiddleware, compose } from 'redux';//
// createStore is deprecated use configureStore instead  
// for how to use modern redux refer to https://redux.js.org/tutorials/essentials/part-2-app-structure
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'; // middleware

import rootReducer from './reducers'; // reducers

import App from './App';

// Create redux store
const store = configureStore({
    reducer: rootReducer,
    // middleware: [thunk], -> Redux Toolkit includes the Redux Thunk middleware by default
});

ReactDOM.render(
    /* Provider ->  keeps track of store which is a global state and that 
        allows us to access that store from *anywhere* inside of the app */
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
); 