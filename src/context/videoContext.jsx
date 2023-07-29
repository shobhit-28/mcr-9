/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { categories, videos } from "../data/data";
import { videoReducer } from "./videoReducer";

export const VideoContext = createContext();

export const VideoHandler = ({children}) => {
    
    const initialState = {
        categories : categories,
        videos: videos
    }

    const [state, dispatch] = useReducer(videoReducer, initialState);

    return (
        <VideoContext.Provider value={{
            categories: state.categories,
            videos: state.videos
        }}>
            {children}
        </VideoContext.Provider>
    )

}