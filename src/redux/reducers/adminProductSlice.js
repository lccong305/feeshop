import {
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
} from "../constants";

const initialState = {
  editProduct: {
    //edit
    editProductFetching: false,
    editProductSuccess: false,
    // editProductData: null,
    editProductError: false,
  },
  addProduct: {
    addProductFetching: false,
    addProductSuccess: false,
    // addProductData: null,
    addProductError: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // -------------------------------- Edit product --------------------------------
    case EDIT_PRODUCT_START:
      return {
        ...state,
        editProduct: {
          editProductSuccess: false,
          editProductFetching: true,
        },
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editProduct: {
          editProductSuccess: true,
          editProductFetching: false,
          // currentProduct: action.payload,
        },
      };
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        editProduct: {
          editProductError: true,
        },
      };
    // -------------------------------- Add product --------------------------------
    case ADD_PRODUCT_START:
      return {
        ...state,
        addProduct: {
          addProductSuccess: false,
          addProductFetching: true,
        },
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: {
          addProductFetching: false,
          addProductSuccess: true,
          // currentProduct: action.payload,
        },
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        addProduct: {
          addProductFetching: false,
          addProductError: true,
        },
      };

    default:
      return state;
  }
};
