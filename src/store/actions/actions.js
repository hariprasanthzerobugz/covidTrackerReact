import { ActionTypes } from "../constants/actionTypes"

export const searchValue = (key) => {
    return {
        type: ActionTypes.SEARCH_KEY,
        payload: key,
    }
}
export const sortValue = (key) => {
    return {
        type: ActionTypes.SORT_VALUE,
        payload: key,
    }
}
export const setStateList = (key) => {
    return {
        type: ActionTypes.SET_STATE_LIST,
        payload: key,
    }
}
export const dateValue = (key) => {
    return {
        type: ActionTypes.DATE_SEARCH,
        payload: key,
    }
}