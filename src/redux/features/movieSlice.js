import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fav: [],
};

export const movieSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItemtoFavorite: (state, action) => {
      state.fav.push(action.payload);
    },
    removeItemfromFavorite: (state, action) => {
      state.fav = state.fav.filter((item) => item._id !== action.payload);
    },
    
  },
});

export const { addItemtoFavorite, removeItemfromFavorite } =
  movieSlice.actions;

export default movieSlice.reducer;
