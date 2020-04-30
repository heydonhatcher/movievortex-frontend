import { createReducer } from "@reduxjs/toolkit";
import {
  backendConnectionError,
  backendError,
  jsonResponseError,
  unknownError
} from "../actions";

export default createReducer(null, {
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
  }
});
