import { types } from "./types";

export const videoReducer = (state, action) => {

    const {
        ADD_TO_WATCH_LATER,
        REMOVE_FROM_WATCH_LATER
    } = types

    switch (action.type) {

        case ADD_TO_WATCH_LATER:
            return { ...state, watchLaterList: [...state.watchLaterList, action.payload] };

        case REMOVE_FROM_WATCH_LATER:
            return { ...state, watchLaterList: state.watchLaterList.filter((id) => id !== action.payload ) };

        default:
            return state;
    }
}