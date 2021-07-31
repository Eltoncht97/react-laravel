import { types } from "../types/types";

const initialState = { loading: true }

export const notesReducer = ( state=initialState , action ) => {
    switch (action.type) {
        case types.loadNotes:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
                loading: false
            }

        default:
            return state;
    }
}
