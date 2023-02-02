import { takeLatest } from "typed-redux-saga";
import { userWorker } from "./workers";

export function* userWathcer(){
    yield takeLatest('test', userWorker)
}