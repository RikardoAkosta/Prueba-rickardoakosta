import { getConfig } from "@testing-library/react";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";

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

};

export const addToFavorites = favorites => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://front-test-app.herokuapp.com/product/add_to_favorite/",
      favorites,
      getConfig()
    )
    .then(() => {dispatch(getCart ())
      alert("Se Añadio el producto al carrito")
})
    .catch(error=> console.log(error.respsonse))
    .finally(() => dispatch(setIsLoading(false)));
};


export default cartSlice.reducer;
