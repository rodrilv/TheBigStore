import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: ''
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;