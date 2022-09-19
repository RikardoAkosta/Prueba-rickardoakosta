import { createSlice } from "@reduxjs/toolkit";

export const purchasesSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      return action.payload;
    },
  },
});
