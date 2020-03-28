import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { newMovieSelected } from "../actions";

const selectedMovie = createReducer(
  {},
  {
    [newMovieSelected]: (state, action) => action.payload
  }
);
const movieResults = (state = []) => state;
export default combineReducers({
  selectedMovie,
  movieResults
});
