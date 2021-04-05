import {put} from "redux-saga/effects";
import * as actionType from "../reducer/reducer";


export function* initilizeHandlerSaga(){
    window.localStorage.clear();
    const scoreKeeper  = {
        game : 5,
        score1:0,
        score2:0
    }
    yield localStorage.setItem("scoreKeeper",JSON.stringify(scoreKeeper));
}

export function* gameHandlerSaga(action){
       const localValue =  JSON.parse(localStorage.getItem("scoreKeeper"));
       const updateValue = {...localValue};
       updateValue.score1 = 0;
       updateValue.score2 = 0;
       updateValue.game = action.game;
       yield localStorage.setItem("scoreKeeper",JSON.stringify(updateValue));
       yield put(actionType.gameHandlerFinal(updateValue.game,updateValue.score1,updateValue.score2));
}

export function* score1HandlerSaga(){
       const localValue =  JSON.parse(localStorage.getItem("scoreKeeper"));
       const updateValue = {...localValue};
       updateValue.score1 = localValue.score1 +1;
       yield localStorage.setItem("scoreKeeper",JSON.stringify(updateValue));
       yield put(actionType.score1HandlerFinal(updateValue.score1));
}

export function* score2HandlerSaga(){
       const localValue =  JSON.parse(localStorage.getItem("scoreKeeper"));
       const updateValue = {...localValue};
       updateValue.score2 = localValue.score2 +1;
       yield localStorage.setItem("scoreKeeper",JSON.stringify(updateValue));
       yield put(actionType.score2HandlerFinal(updateValue.score2));
}

export function* resetHandlerSaga(){
    const localValue =  JSON.parse(localStorage.getItem("scoreKeeper"));
    const updateValue = {...localValue};
    updateValue.score1 = 0;
    updateValue.score2 = 0;
    updateValue.game = 5;
    yield localStorage.setItem("scoreKeeper",JSON.stringify(updateValue));
    yield put(actionType.resetHandlerFinal(updateValue));
}