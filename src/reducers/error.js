import { createReducer } from "@reduxjs/toolkit";
import {
  backendConnectionError,
  backendError,
  jsonResponseError
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
  }
});
