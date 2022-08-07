import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    search: null,
    sort: null,
    date: null,
    stateList: [],
}
export const covidTrackerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_KEY:
            return { ...state, search: payload };
        case ActionTypes.SET_STATE_LIST:
            return { ...state, stateList: payload };
        case ActionTypes.DATE_SEARCH:
            return { ...state, date: payload };
        case ActionTypes.SORT_VALUE:
            return { ...state, sort: payload };
        default:
            return state;
    }
}