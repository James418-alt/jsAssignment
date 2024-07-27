import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { addData } = slice.actions;

export default slice.reducer;
