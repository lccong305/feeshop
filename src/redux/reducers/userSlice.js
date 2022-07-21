import {
  ADD_USER_FETCHING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "../constants";

const initialState = {
  userRegister: {
    isFetching: false,
    currentUser: null,
    error: false,
  },
  getUser: {
    getUserFetching: false,
    getUserData: null,
    getUserError: false,
  },
};

const userSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_FETCHING:
      return {
        ...state,
        userRegister: {
          isFetching: true,
        },
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        userRegister: {
          isFetching: false,
          currentUser: action.payload,
        },
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        userRegister: {
          isFetching: false,
          error: true,
        },
      };
    // get user
    case GET_USER_START:
      return {
        ...state,
        getUser: {
          getUserFetching: true,
        },
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        getUser: {
          getUserFetching: false,
          getUserData: action.payload,
        },
      };
    case GET_USER_ERROR:
      return {
        ...state,
        getUser: {
          getUserFetching: false,
          getUserError: true,
        },
      };
    default:
      return state;
  }
};
export default userSlice;
