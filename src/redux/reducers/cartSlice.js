import {
  ADD_TO_CART,
  DECREMENT_ITEM_CART,
  INCREMENT_ITEM_CART,
  REMOVE_ITEM_CART,
} from "../constants";

const initialState = {
  cartItems: [],
};

const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newCartItems = state.cartItems;
      const isEmptyCart = newCartItems.length <= 0;
      if (isEmptyCart) {
        newCartItems = [action.payload];
      } else {
        const isExists = state.cartItems.find(
          (item) => item.data.id === action.payload.data.id
        );
        if (isExists) {
          newCartItems = state.cartItems.map((item) =>
            item.data.id === action.payload.data.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          );
        } else {
          newCartItems = [...newCartItems, action.payload];
        }
      }
      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case REMOVE_ITEM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => {
          return cartItem.data.id !== action.payload;
        }),
      };
    }
    case INCREMENT_ITEM_CART: {
      const newCartItemss = state.cartItems.map((item) =>
        item.data.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cartItems: newCartItemss,
      };
    }
    case DECREMENT_ITEM_CART: {
      const newCartItemss = state.cartItems.map((item) =>
        item.data.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        cartItems: newCartItemss,
      };
    }
    default:
      return state;
  }
};
export default cartSlice;
