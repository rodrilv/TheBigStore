import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import searchSlice from "../features/searchSlice";
import sidebarSlice from '../features/sideBarSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    user: userSlice,
    sidebar: sidebarSlice
  },
});
