import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import movieReducer from "./movieSlice";
const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
export default store;
