import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      return action.payloand;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.action;

export default isLoadingSlice.reducer;
