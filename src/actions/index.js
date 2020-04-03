import { createAction } from "@reduxjs/toolkit";

export const newMovieSelected = createAction("newMovieSelected");
export const movieResultsReceived = createAction("movieResultsReceived");
export const movieQueryStarted = createAction("movieQueryStarted");
export const movieQueryFinished = createAction("movieQueryFinished");
export const movieResultClicked = movie => dispatch => {
  dispatch(newMovieSelected(movie));
  dispatch(movieQueryStarted());
  setTimeout(() => dispatch(movieQueryFinished()), 5000);
};
