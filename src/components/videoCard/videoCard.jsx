/* eslint-disable react/prop-types */

import { useContext } from "react"
import { AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai"
import { VideoContext } from "../../context/videoContext"

export const VideoCard = ({ videoDetails }) => {
    const { addToWatchLater, watchLaterList, removeFromWatchLater } = useContext(VideoContext)

    return (
        <div className="cursor-pointer relative hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[0_1px_5px_rgb(0,0,0,0.2)] duration-500">
            <div className="absolute bg-white right-0 rounded-bl-md text-sky-600">
                {watchLaterList?.find((id) => id === videoDetails?._id) ?
                    <div className="p-2" onClick={() => removeFromWatchLater(videoDetails._id)}>
                        <AiFillClockCircle />
                    </div>
                    :
                    <div className="p-2" onClick={() => addToWatchLater(videoDetails._id)}>
                        <AiOutlineClockCircle />
                    </div>
                }
            </div>
            <div className="w-[18.75rem] h-[10.75rem] flex justify-center items-center overflow-hidden">
                <img src={videoDetails.thumbnail} alt={videoDetails.title} />
            </div>
            <div className="flex justify-between py-2 items-center px-1">
                <div className="flex justify-center items-center">
                    <img src="https://picsum.photos/40/40" alt="" className="rounded-full" />
                </div>
                <div className="w-[15rem]">
                    <p className="font-semibold">{videoDetails.title}</p>
                    <p className="font-medium">{videoDetails.category}</p>
                    <p className="text-black/80">{`${videoDetails.views} views | ${videoDetails.creator}`}</p>
                </div>
            </div>
        </div>
    )
}
