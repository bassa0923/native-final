/* eslint-disable prettier/prettier */
import {
  SET_MOBILE_IMAGE,
  SET_MOBILE_HEADLINE,
  SET_MOBILE_PRICE,
  SET_MOBILE_STARTINGPRICE,
} from './actions';

const initialState = {
  image: '',
  headline: '',
  price: '0',
  startingPrice: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOBILE_IMAGE:
      return {...state, image: action.payload};
    case SET_MOBILE_HEADLINE:
      return {...state, headline: action.payload};
    case SET_MOBILE_PRICE:
      return {...state, price: action.payload};
    case SET_MOBILE_STARTINGPRICE:
      return {...state, startingPrice: action.payload};
    default:
      return state;
  }
}

export default userReducer;
