import { createReducer } from "@reduxjs/toolkit";
import {
  backendConnectionError,
  backendError,
  jsonResponseError,
  unknownError,
  userNotFound,
  clearErrors,
} from "../actions";

export default createReducer(null, {
  [userNotFound]: (state, action) => {
    return (
      "The specified user with Google Id " +
      action.payload +
      " does not have access. Please verify that you are an authorized account."
    );
  },
  [backendConnectionError]: (state, action) => {
    return "The system could not connect to the backend: " + action.payload;
  },
  [backendError]: (state, action) => {
    return "The backend had an issue: " + action.payload;
  },
  [jsonResponseError]: (state, action) => {
    return "The backend did not return a valid response: " + action.payload;
  },
  [unknownError]: (state, action) => {
    return "An unknown error has occurred: " + action.payload;
  },
  [clearErrors]: (state, action) => {
    return null;
  },
});
