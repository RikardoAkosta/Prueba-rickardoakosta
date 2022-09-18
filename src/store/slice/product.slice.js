import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.Slice";

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProdruct: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export const getProduct = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://front-test-api.herokuapp.com/api/product")
    .then(res => dispatch(setProduct(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductId = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://front-test-api.herokuapp.com/api/productid`)
    .then(res => dispatch(setProduct(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterCategory = id => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://front-test-api.herokuapp.com/api/product?categorie=${id}`)
    .then(res => dispatch(setProduct(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};
export default productSlice.reducer;
