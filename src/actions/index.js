import { createAction } from "@reduxjs/toolkit";
import { API_URL } from "../constants";

// pure action creators
export const newMovieSelected = createAction("newMovieSelected");
export const movieResultsReceived = createAction("movieResultsReceived");
export const movieQueryStarted = createAction("movieQueryStarted");
export const movieQueryFinished = createAction("movieQueryFinished");
export const movieTitleInputChanged = createAction("movieTitleInputChanged");
export const backendConnectionError = createAction(
  "backendConnectionError",
  err => {
    return {
      error: true,
      payload: err
    };
  }
);
export const backendError = createAction("backendError", err => {
  return {
    error: true,
    payload: err
  };
});
export const jsonResponseError = createAction("jsonResponseError", err => {
  return {
    error: true,
    payload: err
  };
});

// action creator thunks
const handleBackendResponse = (promise, dispatch) => {
  promise
    // Hit when we can't reach the backend at all
    .catch(err => {
      dispatch(movieQueryFinished());
      dispatch(backendConnectionError(err));
    })
    .then(response => {
      dispatch(movieQueryFinished());
      return response.json();
    })
    .catch(err => {
      // Backend got a result, but it's not valid JSON
      dispatch(jsonResponseError(err));
    })
    .then(data => {
      if (data.error) {
        // Able to reach the backend but something went wrong
        dispatch(backendError(data.error));
      }
      dispatch(movieResultsReceived(data.data));
    });
};
export const movieResultClicked = movie => dispatch => {
  dispatch(newMovieSelected(movie));
  dispatch(movieQueryStarted());
  let url = API_URL + "/movies/match";
  console.log(url);
  let allPeople = new Set();
  movie.writers.forEach(writer => {
    allPeople.add(writer.nconst);
  });
  movie.directors.forEach(director => {
    allPeople.add(director.nconst);
  });
  movie.actors.forEach(actor => {
    allPeople.add(actor.nconst);
  });
  allPeople = Array.from(allPeople);
  let body = JSON.stringify({
    people: allPeople,
    exclude: movie.tconst
  });
  console.log(body);
  const promise = fetch(url, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors"
  });
  handleBackendResponse(promise, dispatch);
};

export const movieTitleSearchStarted = title => dispatch => {
  dispatch(movieQueryStarted());
  let url = API_URL + "/movies/find?title=" + title;
  const promise = fetch(url, {
    method: "GET"
  });
  handleBackendResponse(promise, dispatch);
};
