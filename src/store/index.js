import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import state from "./state";

const store = configureStore({ reducer: rootReducer, preloadedState: state });

export default store;
