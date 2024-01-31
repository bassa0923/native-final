/* eslint-disable prettier/prettier */

const initialState = {
  products: [],
};

const cartInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default cartInfoReducer;
