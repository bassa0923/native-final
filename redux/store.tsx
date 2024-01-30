/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {thunk} from 'redux-thunk';
// import thunkMiddleware from 'redux-thunk';
import {thunk} from 'redux-thunk';
import userReducer from './reducers';

const rootReducer = combineReducers({user: userReducer});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
