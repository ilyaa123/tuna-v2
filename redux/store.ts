import { Action, combineReducers, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";


const rootReducer = combineReducers({
    
})

const makeStore = () => configureStore({
    reducer: rootReducer,
})

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<AppStore['dispatch']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore)