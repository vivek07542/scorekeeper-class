import { takeLatest } from "@redux-saga/core/effects";
import * as actionType from "../reducer/reducer"; 
import {gameHandlerSaga,score1HandlerSaga,score2HandlerSaga,resetHandlerSaga,initilizeHandlerSaga} from "../saga/scoreGame";


export function* watch(){
    yield takeLatest(actionType.INIT,initilizeHandlerSaga);
    yield takeLatest(actionType.INPUT_INITIAL,gameHandlerSaga);
    yield takeLatest(actionType.SCORE1_INITIAL,score1HandlerSaga);
    yield takeLatest(actionType.SCORE2_INITIAL,score2HandlerSaga)
    yield takeLatest(actionType.RESET_STATE,resetHandlerSaga)
}