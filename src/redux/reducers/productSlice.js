import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from "../constants";

const initialState = {
  products: [],
  product_detail: [],
};

const productSlice = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        product_detail: action.payload,
      };
    default:
      return state;
  }
};
export default productSlice;
