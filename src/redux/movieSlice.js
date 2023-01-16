import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCredits,
  fetchMoviesByCategory,
  fetchNewArrival,
  fetchVideos,
} from "../utils/api";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    error: null,
    featured: [],
    latest: [],
    exclusive: [],
    cast: [],
  },
  reducers: {
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
    latestStart(state) {
      state.loading = true;
      state.error = null;
    },
    latestSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.latest = action.payload.latest;
    },
    latestFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.latest = null;
    },
    exclusiveStart(state) {
      state.loading = true;
      state.error = null;
    },
    exclusiveSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.exclusive = action.payload.exclusive;
    },
    exclusiveFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.latest = null;
    },
    castStart(state) {
      state.loading = true;
      state.error = null;
    },
    castSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.cast = action.payload.cast;
    },
    castFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.latest = null;
    },
  },
});

export const {
  featuredStart,
  featuredSuccess,
  featuredFailure,
  latestStart,
  latestSuccess,
  latestFailure,
  exclusiveStart,
  exclusiveSuccess,
  exclusiveFailure,
  castStart,
  castSuccess,
  castFailure,
} = movieSlice.actions;

export const fetchMovieData = () => async (dispatch) => {
  dispatch(featuredStart());
  try {
    const movies = await fetchMoviesByCategory();
    dispatch(featuredSuccess({ featured: movies?.results }));
  } catch (error) {
    dispatch(featuredFailure({ error }));
  }
};
export const fetchLatest = () => async (dispatch) => {
  dispatch(latestStart());
  try {
    const movies = await fetchNewArrival();
    dispatch(latestSuccess({ latest: movies?.results }));
  } catch (error) {
    dispatch(latestFailure({ error }));
  }
};
export const fetchExclusive = () => async (dispatch) => {
  dispatch(exclusiveStart());
  try {
    const movies = await fetchVideos();

    dispatch(exclusiveSuccess({ exclusive: movies?.results }));
  } catch (error) {
    dispatch(exclusiveFailure({ error }));
  }
};
export const fetchCasts = () => async (dispatch) => {
  dispatch(castStart());
  try {
    const movies = await fetchCredits();
    dispatch(castSuccess({ cast: movies?.credits?.cast }));
  } catch (error) {
    dispatch(castFailure({ error }));
  }
};

export default movieSlice.reducer;
