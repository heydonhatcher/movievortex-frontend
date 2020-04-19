import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import error from "./error";
import {
  newMovieSelected,
  movieQueryStarted,
  movieQueryFinished,
  movieResultsReceived,
  movieTitleInputChanged
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

const movieTitleSearchValue = createReducer("", {
  [movieTitleInputChanged]: (state, action) => action.payload
});

export default combineReducers({
  selectedMovie,
  movieResults,
  movieResultsAreLoading,
  movieTitleSearchValue,
  error
});
