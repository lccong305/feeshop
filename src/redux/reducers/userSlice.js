import {
  ADD_USER_FETCHING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
} from "../constants";

const initialState = {
  userRegister: {
    isFetching: false,
    currentUser: null,
    error: false,
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
      console.log("Payload_user: ", action.payload);
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
    default:
      return state;
  }
};
export default userSlice;
