import { GET_CATE_ERROR, GET_CATE_START, GET_CATE_SUCCESS } from "../constants";

const initialState = {
  getCate: {
    getCateFetching: false,
    getCateData: null,
    getCateError: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATE_START:
      return {
        ...state,
        getCate: {
          getCateFetching: true,
        },
      };
    case GET_CATE_SUCCESS:
      return {
        ...state,
        getCate: {
          getCateFetching: false,
          getCateData: action.payload,
        },
      };
    case GET_CATE_ERROR:
      return {
        getCateError: true,
      };
    default:
      return state;
  }
};
