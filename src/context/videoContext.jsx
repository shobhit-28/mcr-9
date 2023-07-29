/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { categories, videos } from "../data/data";
import { videoReducer } from "./videoReducer";
import { types } from "./types";

export const VideoContext = createContext();

export const VideoHandler = ({children}) => {

    const {
        ADD_TO_WATCH_LATER,
        REMOVE_FROM_WATCH_LATER
    } = types
    
    const initialState = {
        categories : categories,
        videos: videos,
        watchLaterList: []
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

    return (
        <VideoContext.Provider value={{
            addToWatchLater,
            removeFromWatchLater,
            categories: state.categories,
            videos: state.videos,
            watchLaterList: state.watchLaterList,
        }}>
            {children}
        </VideoContext.Provider>
    )

}