import axios from "axios";
import {
  CLOSE_MODAL,
  GET_ALL_PRODUCT,
  GET_DETAIL_PRODUCT,
  OPEN_MODAL,
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  INCREMENT_ITEM_CART,
  DECREMENT_ITEM_CART,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ADD_USER_FETCHING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "../constants";

const productApi = "https://fakestoreapi.com";

export const getAllProduct = () => async (dispatch) => {
  // const res = await axios.get("https://apieshopbasic.herokuapp.com/Product");
  const res = await axios.get(productApi + "/products");
  dispatch({ type: GET_ALL_PRODUCT, payload: res.data });
};

export const getDetailProduct = (id) => async (dispatch) => {
  const res = await axios.get(productApi + "/products/" + id);
  dispatch({ type: GET_DETAIL_PRODUCT, payload: res.data });
};

// =========================== Modal =========================

export const openModal = (slug) => async (dispatch) => {
  dispatch({ type: OPEN_MODAL, payload: slug });
};
export const closeModal = () => async (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};
// =========================== cart =========================

export const addToCart = (item) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: item });
};

export const removeItemCart = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_ITEM_CART, payload: id });
};
export const incrementItemCart = (id) => async (dispatch) => {
  dispatch({ type: INCREMENT_ITEM_CART, payload: id });
};

export const decrementItemCart = (id) => async (dispatch) => {
  dispatch({ type: DECREMENT_ITEM_CART, payload: id });
};
// =========================== login =========================

export const loginFetching = () => async (dispatch) => {
  dispatch({ type: LOGIN_FETCHING });
};

export const loginSuccess = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: data });
};
export const loginError = () => async (dispatch) => {
  dispatch({ type: LOGIN_ERROR });
};

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginFetching());
  try {
    const res = await axios.post("https://fakestoreapi.com/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    console.log(err);
    dispatch(loginError());
  }
};

// ----------------------------------- Add user ----------------------------------------------------
export const addUserFetching = () => async (dispatch) => {
  dispatch({ type: ADD_USER_FETCHING });
};

export const addUserSuccess = (data) => async (dispatch) => {
  dispatch({ type: ADD_USER_SUCCESS, payload: data });
};
export const addUserError = () => async (dispatch) => {
  dispatch({ type: ADD_USER_ERROR });
};

export const addUserAccount = async (userAccount, dispatch, navigate) => {
  console.log("user_account_action: ", userAccount);
  dispatch(addUserFetching());

  try {
    const res = await axios.post("https://fakestoreapi.com/users", userAccount);
    console.log(res.data);
    dispatch(addUserSuccess(res.data));
    // navigate("/");
  } catch (err) {
    console.log(err);
    dispatch(addUserError());
  }
};

// -------------------------- Admin product ----------------------------

export const addProductStart = () => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_START });
};

export const addProductSuccess = (data) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
};
export const addProductError = () => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_ERROR });
};

export const addProduct = async (id, productEdited, dispatch, navigate) => {
  dispatch(addProductStart());

  try {
    console.log("action_prd: ", productEdited);
    console.log("action_img: ", productEdited.image);

    let formData = new FormData();

    console.log(productEdited.title);

    formData.append("title", productEdited.title);
    formData.append("price", productEdited.price);
    formData.append("description", productEdited.description);
    formData.append("image", productEdited.image);
    formData.append("category", productEdited.category);

    axios({
      method: "put",
      url: `https://fakestoreapi.com/products/${id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log(res.data);
      // dispatch(addProductSuccess(res.data));
      // navigate("/");
    });

    // const res = await axios.put(
    //   `https://fakestoreapi.com/products/${id}`,
    //   productEdited
    // );
    // console.log(res.data);
    // dispatch(addProductSuccess(res.data));
    // navigate("/");
  } catch (err) {
    console.log(err);
    dispatch(addProductError());
  }
};
