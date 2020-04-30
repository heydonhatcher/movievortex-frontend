import { createAction } from "@reduxjs/toolkit";
import { API_URL } from "../constants";
import {
  ERROR_BACKEND_CONNECTION,
  ERROR_BACKEND_RESPONSE,
  ERROR_JSON
} from "../constants/errors";

// pure action creators
export const loginSuccess = createAction("loginSuccess");
export const loginFailure = createAction("loginFailure");
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
export const unknownError = createAction("unknownError", err => {
  return {
    error: true,
    payload: err
  };
});

// action creator thunks
const handleBackendResponse = (promise, dispatch) => {
  promise
    .then(
      response => {
        dispatch(movieQueryFinished());
        try {
          return response.json();
        } catch (err) {
          // Backend got a result, but it's not valid JSON
          throw {
            type: ERROR_JSON,
            err: err
          };
        }
      },
      // Hit when we can't reach the backend at all
      err => {
        throw {
          type: ERROR_BACKEND_CONNECTION,
          err: err
        };
      }
    )
    .then(data => {
      if (data.error) {
        // Able to reach the backend but something went wrong
        throw {
          type: ERROR_BACKEND_RESPONSE,
          err: data.error
        };
      } else {
        // Everything went well! Woo!
        dispatch(movieResultsReceived(data.data));
      }
    })
    .catch(err => {
      dispatch(movieQueryFinished());
      switch (err.type) {
        case ERROR_JSON:
          dispatch(jsonResponseError(err.err));
          break;
        case ERROR_BACKEND_CONNECTION:
          dispatch(backendConnectionError(err.err));
          break;
        case ERROR_BACKEND_RESPONSE:
          dispatch(backendError(err.err));
          break;
        default:
          dispatch(unknownError(err.err));
          break;
      }
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
