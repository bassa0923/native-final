import cartInfoReducer from './cartInfo';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  cartInfo: cartInfoReducer,
});

export default allReducers;
