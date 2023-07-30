import { useContext, useState } from "react"
import { useParams } from "react-router-dom"

import { VideoContext } from "../../context/videoContext"
import { VideoCard } from "../../components/videoCard/videoCard"

import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai"

export const SinglePlayListPage = () => {
    const { playListID } = useParams()

    const { playList, videos, removeFromPlaylist, addVideoToExistingPlayList } = useContext(VideoContext)

    const [isAddVideosOpen, setIsAddVideosOpen] = useState(false)

    const currPlayList = playList?.find((playList) => playList?.playListID === playListID)

    const currPlayListVideos = videos?.filter((video) => (
        currPlayList?.videos.some((videoID) => Number(videoID) === video?._id)
    ))


    const currPlayListRestOfVideos = currPlayListVideos.length > 0
        ?
        videos?.filter((video) => (
            currPlayList?.videos.every((videoID) => (Number(videoID) !== video?._id))
        ))
        :
        videos

    const addToClickHandler = (videoID) => {
        addVideoToExistingPlayList(String(videoID), playListID)
        setIsAddVideosOpen(false)
    }

    return (
        <div className="page">
            <h1 className="text-4xl font-semibold capitalize">{currPlayList?.playListName}</h1>
            <h1 className="text-2xl font-medium my-4">{currPlayList?.playListDesc}</h1>
            <div className="flex flex-wrap gap-4 pt-6">
                {
                    currPlayListVideos?.map((video) => (
                        <div className="relative" key={video?._id}>
                            <button className="absolute z-20 p-2 bg-white/90 text-red-600 rounded-br-md" onClick={() => removeFromPlaylist(String(video?._id), playListID)}>
                                <AiTwotoneDelete />
                            </button>
                            <VideoCard videoDetails={video} />
                        </div>
                    ))
                }
                <button onClick={() => setIsAddVideosOpen(true)} className="w-[18.75rem] cursor-pointer hover:border-black/40 border-[.1rem] border-dashed duration-500 flex justify-center items-center text-9xl text-black/75 hover:bg-sky-50 hover:text-black">
                    <AiOutlinePlus />
                </button>
            </div>
            {isAddVideosOpen &&
                <div className="fixed z-50 h-screen w-screen bg-black/10 top-0 right-0 flex justify-center items-center" onClick={() => setIsAddVideosOpen(false)}>
                    <div className="bg-white flex flex-col gap-5 max-h-[70vh] overflow-auto p-4 rounded-lg" onClick={(event) => event.stopPropagation()}>
                        <h1 className="text-2xl font-semibold">Add to Playlist</h1>
                        {currPlayListRestOfVideos?.map((video) => (
                            <button key={video?._id} className="flex gap-4" onClick={() => addToClickHandler(video?._id)}>
                                <div className="w-[15rem]">
                                    <img src={video?.thumbnail} alt="" />
                                </div>
                                <span className="w-[17rem] text-start">{video?.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
