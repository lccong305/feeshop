import { CLOSE_MODAL, OPEN_MODAL } from "../constants";

const initialState = {
  value: null,
};

const productModalSlice = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        value: action.payload,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        value: null,
      };

    default:
      return state;
  }
};
export default productModalSlice;
