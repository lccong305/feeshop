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
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_START,
  GET_CATE_START,
  GET_CATE_SUCCESS,
  GET_CATE_ERROR,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_CATEGORY_START,
} from "../constants";

export const fetch_request = () => {
  return { type: "products/fetch_request" };
};

export const fetch_error = () => {
  return { type: "products/fetch_error" };
};

export const getAllProduct = () => async (dispatch) => {
  dispatch(fetch_request());
  try {
    const res = await axios.get("https://apieshopbasic.herokuapp.com/Product");
    dispatch({ type: "products/fetch_success", payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch(fetch_error());
  }
};

export const getDetailProduct = (slug) => async (dispatch) => {
  const res = await axios.get(
    `https://apieshopbasic.herokuapp.com/Product/${slug}`
  );
  dispatch({ type: GET_DETAIL_PRODUCT, payload: res.data });
};

// =========================== Modal =========================

export const openModal = (slug) => async (dispatch) => {
  console.log(slug);
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
    const res = await axios.post(
      "https://apieshopbasic.herokuapp.com/auth/signin",
      user
    );
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    console.log(err);
    dispatch(loginError());
  }
};
// =========================== get user when login =========================
export const getUserStart = () => async (dispatch) => {
  dispatch({ type: GET_USER_START });
};

export const getUserSuccess = (data) => async (dispatch) => {
  dispatch({ type: GET_USER_SUCCESS, payload: data });
};
export const getUserError = () => async (dispatch) => {
  dispatch({ type: GET_USER_ERROR });
};

export const getUser = async (accessToken, dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get(
      "https://apieshopbasic.herokuapp.com/User/Profile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getUserError());
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
    const res = await axios.post(
      "https://apieshopbasic.herokuapp.com/auth/signup",
      userAccount
    );
    console.log(res.data);
    dispatch(addUserSuccess(res.data));
    // navigate("/");
  } catch (err) {
    console.log(err);
    dispatch(addUserError());
  }
};

// -------------------------- Admin product ----------------------------

export const editProductStart = () => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_START });
};

export const editProductSuccess = (data) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: data });
};
export const editProductError = () => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_ERROR });
};

export const editProduct = async (id, productEdited, dispatch, navigate) => {
  dispatch(editProductStart());

  try {
    // console.log("action_prd: ", productEdited);
    // console.log("action_img: ", productEdited.image);

    const formData = new FormData();

    formData.append("id", productEdited.id);
    formData.append("name", productEdited.name);
    formData.append("price", productEdited.price);
    formData.append("shortDes", productEdited.shortDes);
    formData.append("shortDetails", "xin chao");
    formData.append("file", productEdited.file);
    formData.append("quantity", 100);
    formData.append("discount", 10);
    formData.append("view", 1);
    formData.append("categoryName", productEdited.categoryName);
    formData.append("size", ["s", "m"]);

    // axios({
    //   method: "PUT",
    //   url: "https://apieshopbasic.herokuapp.com/Product",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // }).then((res) => {
    //   console.log(res.data);
    //   // dispatch(addProductSuccess(res.data));
    //   // navigate("/");
    // });

    const res = await axios.put(
      "https://apieshopbasic.herokuapp.com/Product",
      formData
    );
    console.log(res.data);
    dispatch(editProductSuccess(res.data));

    dispatch(closeModal());
    // navigate("/product_ad");
  } catch (err) {
    console.log(err);
    dispatch(editProductError());
  }
};

// ---------------------------- add product ---------------------------------

export const addProductStart = () => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_START });
};

export const addProductSuccess = (data) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
};
export const addProductError = () => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_ERROR });
};

export const addProduct = async (newProduct, dispatch) => {
  dispatch(addProductStart());
  try {
    const formData = new FormData();

    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("shortDes", newProduct.shortDes);
    formData.append("shortDetails", "xin chao");
    formData.append("file", newProduct.file);
    formData.append("quantity", 100);
    formData.append("discount", 10);
    formData.append("view", 1);
    formData.append("categoryName", newProduct.categoryName);
    formData.append("size", ["s", "m"]);

    axios({
      method: "POST",
      url: "https://apieshopbasic.herokuapp.com/Product",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log(res.data);
      dispatch(addProductSuccess(res.data));
      // navigate("/");
    });
  } catch (err) {
    console.log(err);
    dispatch(addProductError());
  }
};

//----------------------------------  category ----------------------------------
export const getCateStart = () => async (dispatch) => {
  dispatch({ type: GET_CATE_START });
};

export const getCateSuccess = (data) => async (dispatch) => {
  dispatch({ type: GET_CATE_SUCCESS, payload: data });
};
export const getCateError = () => async (dispatch) => {
  dispatch({ type: GET_CATE_ERROR });
};

export const getAllCate = async (dispatch) => {
  dispatch(getCateStart());
  try {
    const res = await axios.get("https://apieshopbasic.herokuapp.com/Category");
    dispatch(getCateSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getCateError());
  }
};

export const getProductByCategoryStart = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_BY_CATEGORY_START });
};

export const getProductByCategory = (slug) => async (dispatch) => {
  dispatch(getProductByCategoryStart());
  try {
    const res = await axios.get(`https://apieshopbasic.herokuapp.com/${slug}`);
    dispatch({ type: GET_PRODUCT_BY_CATEGORY, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
