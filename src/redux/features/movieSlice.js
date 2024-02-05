import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  fav: [],
};

export const movieSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItemtoFavorite: (state, action) => {
      state.fav.push(action.payload);
      toast.success('Item added to favorites!', { position: 'bottom-right' });
    },
    removeItemfromFavorite: (state, action) => {
      state.fav = state.fav.filter((item) => item._id !== action.payload);
            toast.error("Item removed from favorites!", { position: "bottom-right" });

    },
  },
});

export const { addItemtoFavorite, removeItemfromFavorite } = movieSlice.actions;

export default movieSlice.reducer;
