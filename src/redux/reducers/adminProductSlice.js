import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
} from "../constants";

const initialState = {
  addProduct: {
    isFetching: false,
    currentProduct: null,
    error: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_START:
      return {
        ...state,
        addProduct: {
          isFetching: true,
        },
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: {
          isFetching: false,
          currentProduct: action.payload,
        },
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        addProduct: {
          isFetching: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
