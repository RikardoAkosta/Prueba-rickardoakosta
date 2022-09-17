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
    .get("https://front-test-api.herokuapp.com/product/")
    .then(res => dispatch(setProduct(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export default productSlice.reducer;