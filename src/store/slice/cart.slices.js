import { getConfig } from "@testing-library/react";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducer: {
    setCart: (state, action) => {
      return action.payloand;
    },
  },
});

export const { setCart } = cartSlice.actions;

export const getCart = () => dispatch => {
  /*dispatch(setIsLoading(true));*/
  return axios
    .get("https://front-test-api.herokuapp.com/api/product/cart", getConfig())
    .then(res => dispatch(setCart(res.data.data.cart.product)));
  /*.finally(() => dispatch(setIsLoading(false)));*/
};

export default cartSlice.reducer;
