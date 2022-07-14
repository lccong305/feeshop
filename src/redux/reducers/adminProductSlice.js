import {
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
} from "../constants";

const initialState = {
  addProduct: {
    //edit
    isFetching: false,
    isSuccess: false,
    currentProduct: null,
    error: false,
  },
  _addProduct: {
    isFetching: false,
    isSuccess1: false,
    currentProduct: null,
    error: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT_START:
      return {
        ...state,
        addProduct: {
          isFetching: true,
        },
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: {
          isFetching: false,
          isSuccess: true,
          // currentProduct: action.payload,
        },
      };
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        addProduct: {
          isFetching: false,
          error: true,
        },
      };
    // ----------- Add product --------------------------------

    case ADD_PRODUCT_START:
      return {
        ...state,
        _addProduct: {
          isFetching: true,
        },
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        _addProduct: {
          isFetching: false,
          isSuccess1: true,
          // currentProduct: action.payload,
        },
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        _addProduct: {
          isFetching: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
