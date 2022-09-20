import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slice/isLoading.slice";
import product from "./slice/product.slice";
import purchases from "./slice/purchases.slice";

export default configureStore({
  reducer: {
    isLoading,
    product,
    purchases,
  },
});
