import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slice/isLoading.slice";
import product from "./slice/product.slice";
import purchases from "./slice/purchases.slice";
import cart from "./slice/cart.slices";

export default configureStore({
  reducer: {
    isLoading,
    product,
    purchases,
    cart
  },
});
 