/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { categories, videos } from "../data/data";
import { videoReducer } from "./videoReducer";
import { types } from "./types";

export const VideoContext = createContext();

export const VideoHandler = ({ children }) => {

    const {
        ADD_TO_WATCH_LATER,
        REMOVE_FROM_WATCH_LATER,
        ADD_COMMENT,
        EDIT_COMMENT,
        REMOVE_COMMENT,
        ADD_TO_PLAYLIST,
        REMOVE_FROM_PLAYLIST,
        ADD_TO_EXISTING_PLAYLIST
    } = types

    const initialState = {
        categories: categories,
        videos: videos,
        watchLaterList: [],
        commentList: [],
        playList: [],
    }

    const [state, dispatch] = useReducer(videoReducer, initialState);

    const addToWatchLater = (videoID) => {
        dispatch({
            type: ADD_TO_WATCH_LATER,
            payload: videoID
        })
    }

    const removeFromWatchLater = (videoID) => {
        dispatch({
            type: REMOVE_FROM_WATCH_LATER,
            payload: videoID
        })
    }

    const addComment = (comment, videoID) => {
        if (comment?.length !== 0) {
            dispatch({
                type: ADD_COMMENT,
                payload: { comment: comment, videoID: videoID }
            })
        } else {
            alert('Comments cannot be empty')
        }
    }

    const editComment = (comment, commentID) => {
        if (comment?.length !== 0) {
            dispatch({
                type: EDIT_COMMENT,
                payload: { comment: comment, commentID: commentID }
            })
        } else {
            alert('Comments cannot be empty')
        }
    }

    const removeComment = (commentID) => {
        dispatch({
            type: REMOVE_COMMENT,
            payload: commentID
        })
    }

    const addVideoToNewPlayList = (videoID, playListDetails) => {
        dispatch({
            type: ADD_TO_PLAYLIST,
            payload: {videoID: videoID, playListDetails: playListDetails}
        })
    }

    const addVideoToExistingPlayList = (videoID, playListID) => {
        dispatch({
            type: ADD_TO_EXISTING_PLAYLIST,
            payload: {videoID, playListID}
        })
    }

    const removeFromPlaylist = (videoID, playListID) => {
        dispatch({
            type: REMOVE_FROM_PLAYLIST,
            payload: {videoID, playListID}
        })
    }

    return (
        <VideoContext.Provider value={{
            addToWatchLater,
            removeFromWatchLater,
            addComment,
            editComment,
            removeComment,
            addVideoToNewPlayList,
            addVideoToExistingPlayList,
            removeFromPlaylist,
            categories: state.categories,
            videos: state.videos,
            watchLaterList: state.watchLaterList,
            commentList: state.commentList,
            playList: state.playList
        }}>
            {children}
        </VideoContext.Provider>
    )

}