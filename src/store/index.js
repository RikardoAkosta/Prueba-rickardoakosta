import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slice/isLoading.Slice";
import product from "./slice/product.slice";

export default configureStore({
  reducer: {
    isLoading,
    product,
  },
});
