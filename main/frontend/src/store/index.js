// import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "./auth-slice";
// import groupsSlice from "./groups-slice";
// const store = configureStore({
//     reducer: { 
//         auth: authSlice.reducer,
//         group: groupsSlice.reducer,
    
//     },
// });

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const inititalState = {};

const store = createStore(
    rootReducer,
    inititalState,
    compose(applyMiddleware(thunk)
         ));


export default store;