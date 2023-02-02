import { all } from "typed-redux-saga";
import { userWathcer } from "./userSaga/watchers";


export default function* rootSaga(){
    yield all([userWathcer()])
}