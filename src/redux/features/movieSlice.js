import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useFetchData } from '../../hooks/useFetchData';

export const fetchDataAsync = createAsyncThunk(
  'movies/fetchDataAsync',
  async () => {
    const { data } = await useFetchData();
    return data;
  }
);

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
