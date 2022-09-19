import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slice/isLoading.Slice";
import product from "./slice/product.slice";
import purchases, { purchasesSlice }  from "./slice/purchases.slice";

export default configureStore({
  reducer: {
    isLoading,
    product,
    purchases
  }
}
});

export const  {setIsLoading } = purchasesSlice.actions;
export default purchasesSlice.reducer;
