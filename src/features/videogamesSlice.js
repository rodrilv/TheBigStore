import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const videogamesSlice = createSlice({
  name: "videogame",
  initialState,
  reducers: {
    setVideogames: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setVideogames } = videogamesSlice.actions;

export default videogamesSlice.reducer;
