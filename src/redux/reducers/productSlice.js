import {
  // GET_ALL_PRODUCT,
  GET_DETAIL_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_CATEGORY_START,
} from "../constants";

const initialState = {
  loading: false,
  error: undefined,
  products: [],
  cateProduct: {
    cateProduct_fetching: false,
    cateProduct_data: null,
    // cateProduct_error: false,
  },
  product_detail: [],
};

const productSlice = (state = initialState, action) => {
  switch (action.type) {
    case "products/fetch_request":
      return {
        ...state,
        loading: true,
      };

    case "products/fetch_success":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "products/fetch_error":
      return {
        ...state,
        loading: false,
      };
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        product_detail: action.payload,
      };
    case GET_PRODUCT_BY_CATEGORY_START: {
      return {
        ...state,
        cateProduct: {
          cateProduct_fetching: true,
        },
      };
    }
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        cateProduct: {
          cateProduct_fetching: false,
          cateProduct_data: action.payload,
        },
      };
    default:
      return state;
  }
};
export default productSlice;
