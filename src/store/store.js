import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import searchSlice from "../features/searchSlice";
import videogamesSlice from "../features/videogamesSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    user: userSlice,
    videogames: videogamesSlice
  },
});
