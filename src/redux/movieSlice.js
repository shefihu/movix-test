import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesByCategory } from "../utils/api";

const movieSlice = createSlice({
  name: "movies",
  initialState: { loading: false, error: null, featured: [] },
  reducers: {
    // setMovies: (state, action) => {
    //   return action.payload;
    // },
    featuredStart(state) {
      state.loading = true;
      state.error = null;
    },
    featuredSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.featured = action.payload.featured;
    },
    featuredFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.featured = null;
    },
  },
});

export const { featuredStart, featuredSuccess, featuredFailure } =
  movieSlice.actions;

export const fetchMovieData = () => async (dispatch) => {
  dispatch(featuredStart());
  try {
    const movies = await fetchMoviesByCategory();
    dispatch(featuredSuccess({ featured: movies?.results }));
  } catch (error) {
    dispatch(featuredFailure({ error }));
  }
};
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchMoviesByCategory } from "../utils/api";

// const movieSlice = createSlice({
//   name: "movies",
//   initialState: [],
//   reducers: {
//     setMovies: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { setMovies } = movieSlice.actions;

// export const fetchMovieData = () => async (dispatch) => {
//   const movies = await fetchMoviesByCategory();
//   dispatch(setMovies(movies));
//   console.log(movies);
// };

export default movieSlice.reducer;
