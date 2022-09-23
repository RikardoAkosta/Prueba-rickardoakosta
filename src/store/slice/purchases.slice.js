import { createSlice } from "@reduxjs/toolkit";
import getConfig from "../../utils/getConfig";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    setPurchases: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPurchases } = purchasesSlice.action;

export const getPurchases = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://front-test-app.herokuapp.com/purchases/", getConfig())
    .then(res => dispatch(setPurchases(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};


export default purchasesSlice.reducer;
