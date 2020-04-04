import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  newMovieSelected,
  movieQueryStarted,
  movieQueryFinished,
  movieResultsReceived
} from "../actions";

const selectedMovie = createReducer(
  {},
  {
    [newMovieSelected]: (state, action) => action.payload
  }
);
const movieResults = createReducer([], {
  [movieResultsReceived]: (state, action) => action.payload
});

const movieResultsAreLoading = createReducer(false, {
  [movieQueryStarted]: () => true,
  [movieQueryFinished]: () => false
});

export default combineReducers({
  selectedMovie,
  movieResults,
  movieResultsAreLoading
});
