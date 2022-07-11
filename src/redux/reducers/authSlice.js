import { LOGIN_ERROR, LOGIN_FETCHING, LOGIN_SUCCESS } from "../constants";

const initialState = {
  login: {
    isFetching: false,
    currentUser: null,
    error: false,
  },
};

const authSlice = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCHING:
      return {
        ...state,
        login: {
          isFetching: true,
        },
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isFetching: false,
          currentUser: action.payload,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          isFetching: false,
          error: true,
        },
      };
    default:
      return state;
  }
};
export default authSlice;
