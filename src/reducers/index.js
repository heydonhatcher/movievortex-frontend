import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  newMovieSelected,
  movieQueryStarted,
  movieQueryFinished
} from "../actions";

const selectedMovie = createReducer(
  {},
  {
    [newMovieSelected]: (state, action) => action.payload
  }
);
const movieResults = (state = []) => state;

const movieResultsAreLoading = createReducer(false, {
  [movieQueryStarted]: () => true,
  [movieQueryFinished]: () => false
});

export default combineReducers({
  selectedMovie,
  movieResults,
  movieResultsAreLoading
});
