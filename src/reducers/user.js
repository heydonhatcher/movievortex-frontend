import { createReducer } from "@reduxjs/toolkit";
import { loginSuccess } from "../actions/index";

export default createReducer(null, {
  [loginSuccess]: (state, action) => action.payload
});
