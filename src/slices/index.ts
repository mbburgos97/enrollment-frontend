import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";

export const rootReducer = combineReducers({
    profile: profileReducer
})