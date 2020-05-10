import { createReducer } from "@reduxjs/toolkit";
import { userChanged, userNotLoggedIn } from "../actions";

export default createReducer(null, {
  [userChanged]: (state, action) => action.payload,
  [userNotLoggedIn]: (state, action) => null,
});
