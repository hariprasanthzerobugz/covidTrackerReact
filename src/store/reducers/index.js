import { combineReducers } from "redux";
import { covidTrackerReducer } from "./reducers";

const reducers = combineReducers({
    covidTracker: covidTrackerReducer,
})

export default reducers;