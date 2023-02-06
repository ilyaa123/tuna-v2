import { combineReducers } from "@reduxjs/toolkit";

import userReducer from '../store/slices/userSlice/index';

export const rootReducers = combineReducers({
    user: userReducer
})