import { Action, configureStore, Store, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, {Task} from 'redux-saga';
import rootSaga from "./saga";
import { rootReducers } from "./store/reducers";

export interface SagaStore extends Store {
    sagaTask?: Task;
  }

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = configureStore({
        reducer: rootReducers,
        middleware: [sagaMiddleware]
    });

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
} 

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<AppStore['dispatch']>

export const wrapper = createWrapper<Store>(makeStore);

setupListeners(makeStore().dispatch)