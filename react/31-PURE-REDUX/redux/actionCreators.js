import getCurrentTime from "../utils/getCurrentTime.js";
// import {ADD_CURRENT_TIME, CLEAR_ALL_TIMES} from "./actionTypes";

import * as actionTypes from './actionTypes.js'
export function addCurrentTime(){
    return{
        // type: ADD_CURRENT_TIME,
        type: actionTypes.ADD_CURRENT_TIME,
        payload:getCurrentTime()
    }
}

export function clearTimes() {
    return {
        // type: CLEAR_ALL_TIMES,
        type: actionTypes.CLEAR_ALL_TIMES,
    }
}
