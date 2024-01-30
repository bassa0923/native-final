/* eslint-disable prettier/prettier */
export const SET_MOBILE_IMAGE = 'SET_MOBILE_IMAGE';
export const SET_MOBILE_HEADLINE = 'SET_MOBILE_HEADLINE';
export const SET_MOBILE_PRICE = 'SET_MOBILE_PRICE';
export const SET_MOBILE_STARTINGPRICE = 'SET_MOBILE_STARTINGPRICE';

export const setImage = (image: string) => dispatch => {
  dispatch({
    type: SET_MOBILE_IMAGE,
    payload: image,
  });
};

export const setHeadline = (headline: string) => dispatch => {
  dispatch({
    type: SET_MOBILE_HEADLINE,
    payload: headline,
  });
};

export const setPrice = (price: string) => dispatch => {
  dispatch({
    type: SET_MOBILE_PRICE,
    payload: price,
  });
};

export const setStartingPrice = (startingPrice: string) => dispatch => {
  dispatch({
    type: SET_MOBILE_STARTINGPRICE,
    payload: startingPrice,
  });
};
