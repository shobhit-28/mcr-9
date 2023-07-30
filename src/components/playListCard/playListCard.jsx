/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AiTwotoneDelete } from "react-icons/ai"
import { VideoContext } from "../../context/videoContext"

export const PlayListCard = ({playListID, playListName, playListDesc, videos }) => {
    const randomWidth = Math.floor(Math.random() * (312 - 300) + 300)
    const randomHeight = Math.floor(Math.random() * (180 - 174) + 174)

    const {removePlayList} = useContext(VideoContext)

    const deletePlayListHandler = (event) => {
        event.stopPropagation()
        removePlayList(playListID)
    }

    return (
        <div className="relative cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[0_1px_5px_rgb(0,0,0,0.2)] duration-500"> 
            <button className="absolute bg-white/80 right-0 top-0 p-2 rounded-bl-md z-10 text-red-500" onClick={(event) => deletePlayListHandler(event) }>
                <AiTwotoneDelete />
            </button>
            <div className="w-[18.75rem] h-[10.75rem] flex justify-center items-center overflow-hidden relative">
                <img src={`https://picsum.photos/${randomWidth}/${randomHeight}`} alt={playListName} />
                <p className="absolute bottom-0 left-0 bg-white/90 p-2 text-xs rounded-tr-md">{videos.length}</p>
            </div>
            <div className="p-2">
                <p className="text-lg font-medium w-[15rem]">{playListName.length > 20 ? `${playListName.slice(0, 20)}...` : playListName}</p>
                <p className="italic w-[15rem]">{playListDesc.length > 20 ? `${playListDesc.slice(0, 20)}...` : playListDesc}</p>
            </div>
        </div>
    )
}
