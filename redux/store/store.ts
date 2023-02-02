import { Action, applyMiddleware, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../saga";
import userReducer from './slices/userSlice/index';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer 
})

const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware]
    });
    sagaMiddleware.run(rootSaga)  
    return store;
} 

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<AppStore['dispatch']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);

setupListeners(makeStore().dispatch)