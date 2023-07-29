import { v4 as uuidv4 } from 'uuid';

import { types } from "./types";

export const videoReducer = (state, action) => {

    const {
        ADD_TO_WATCH_LATER,
        REMOVE_FROM_WATCH_LATER,
        ADD_COMMENT,
        EDIT_COMMENT,
        REMOVE_COMMENT
    } = types

    switch (action.type) {

        case ADD_TO_WATCH_LATER:
            return { ...state, watchLaterList: [...state.watchLaterList, action.payload] };

        case REMOVE_FROM_WATCH_LATER:
            return { ...state, watchLaterList: state.watchLaterList.filter((id) => id !== action.payload) };

        case ADD_COMMENT:
            return { ...state, commentList: [...state.commentList, { commentID: uuidv4(), id: action.payload.videoID, comment: action.payload.comment }] }

        case EDIT_COMMENT:
            return { ...state, commentList: state.commentList.map((comment) => comment.commentID === action.payload.commentID ? { ...comment, comment: action.payload.comment } : comment) }

        case REMOVE_COMMENT:
            return { ...state, commentList: state.commentList.filter((comment) => comment.commentID !== action.payload ) }

        default:
            return state;
    }
}