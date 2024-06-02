import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recent: [],
  highScore: [],
  videogame: {}
};

export const videogamesSlice = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    setRecent: (state, action) => {
      state.recent = action.payload;
    },

    setHighScore: (state, action) => {
      state.highScore = action.payload;
    },

    setVideogame: (state, action) => {
      state.videogame = action.payload;
    }
  },
});

export const { setRecent, setHighScore, setVideogame } = videogamesSlice.actions;

export default videogamesSlice.reducer;
