import { createAction } from "@reduxjs/toolkit";
import { API_URL } from "../constants";
import Cookies from "js-cookie";
import {
  ERROR_BACKEND_CONNECTION,
  ERROR_BACKEND_RESPONSE,
  ERROR_JSON,
  ERROR_USER_NOT_LOGGED_IN,
  ERROR_USER_NOT_FOUND,
} from "../constants/errors";

// pure action creators
export const userChanged = createAction("userChanged");
export const clearErrors = createAction("clearErrors");
export const loginFailure = createAction("loginFailure");
export const newMovieSelected = createAction("newMovieSelected");
export const movieResultsReceived = createAction("movieResultsReceived");
export const movieQueryStarted = createAction("movieQueryStarted");
export const movieQueryFinished = createAction("movieQueryFinished");
export const movieTitleInputChanged = createAction("movieTitleInputChanged");
export const backendConnectionError = createAction(
  "backendConnectionError",
  (err) => {
    return {
      error: true,
      payload: err,
    };
  }
);
export const backendError = createAction("backendError", (err) => {
  return {
    error: true,
    payload: err,
  };
});
export const jsonResponseError = createAction("jsonResponseError", (err) => {
  return {
    error: true,
    payload: err,
  };
});
export const unknownError = createAction("unknownError", (err) => {
  return {
    error: true,
    payload: err,
  };
});
export const userNotLoggedIn = createAction("userNotLoggedIn", () => {
  return {
    error: true,
  };
});
export const userNotFound = createAction("userNotFound", () => {
  return {
    error: true,
  };
});

// action creator thunks
const handleBackendResponse = (promise, dispatch, onSuccess) => {
  promise
    .then(
      (response) => {
        try {
          return response.json();
        } catch (err) {
          // Backend got a result, but it's not valid JSON
          throw {
            type: ERROR_JSON,
            err: err,
          };
        }
      },
      // Hit when we can't reach the backend at all
      (err) => {
        throw {
          type: ERROR_BACKEND_CONNECTION,
          err: err,
        };
      }
    )
    .then((data) => {
      if (data.error) {
        switch (data.error) {
          case ERROR_USER_NOT_LOGGED_IN:
            throw {
              type: ERROR_USER_NOT_LOGGED_IN,
            };
          case ERROR_USER_NOT_FOUND:
            throw {
              type: ERROR_USER_NOT_FOUND,
            };
          default:
            throw {
              type: ERROR_BACKEND_RESPONSE,
              err: data.error,
            };
        }
      } else {
        // Everything went well! Woo!
        dispatch(clearErrors());
        onSuccess(data.data);
      }
    })
    .catch((err) => {
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
        case ERROR_USER_NOT_LOGGED_IN:
          Cookies.remove("user");
          dispatch(userNotLoggedIn());
          break;
        case ERROR_USER_NOT_FOUND:
          dispatch(userNotFound());
          break;
        default:
          dispatch(unknownError(err.err));
          break;
      }
    });
};

export const movieResultClicked = (movie) => (dispatch) => {
  dispatch(newMovieSelected(movie));
  dispatch(movieQueryStarted());
  let url = API_URL + "/movies/match";
  console.log(url);
  let allPeople = new Set();
  movie.writers.forEach((writer) => {
    allPeople.add(writer.nconst);
  });
  movie.directors.forEach((director) => {
    allPeople.add(director.nconst);
  });
  movie.actors.forEach((actor) => {
    allPeople.add(actor.nconst);
  });
  allPeople = Array.from(allPeople);
  let body = JSON.stringify({
    people: allPeople,
    exclude: movie.tconst,
  });
  console.log(body);
  const promise = fetch(url, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  const onSuccess = (data) => {
    dispatch(movieQueryFinished());
    dispatch(movieResultsReceived(data));
  };
  handleBackendResponse(promise, dispatch, onSuccess);
};

export const movieTitleSearchStarted = (title) => (dispatch) => {
  dispatch(movieQueryStarted());
  let url = API_URL + "/movies/find?title=" + title;
  const promise = fetch(url, {
    method: "GET",
  });
  const onSuccess = (data) => {
    dispatch(movieQueryFinished());
    dispatch(movieResultsReceived(data));
  };
  handleBackendResponse(promise, dispatch, onSuccess);
};

export const frontendLoginSuccess = (googleUser) => (dispatch) => {
  let token = googleUser.getAuthResponse().id_token;
  console.log(token);
  let url = API_URL + "/user/login";
  let body = JSON.stringify({
    token: token,
  });
  const promise = fetch(url, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  const onSuccess = (data) => {
    let username = data.username;
    Cookies.set("user", username, {
      expires: 30,
    });
    dispatch(userChanged(data.username));
  };
  handleBackendResponse(promise, dispatch, onSuccess);
};
