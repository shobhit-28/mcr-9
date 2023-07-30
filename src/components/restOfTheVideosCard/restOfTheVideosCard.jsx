import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
export const RestOfTheVideosCard = ({video}) => {
    const navigate = useNavigate()

  return (
    <div className="flex gap-2 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[0_1px_5px_rgb(0,0,0,0.2)] duration-500 p-2 mx-2 rounded-lg" onClick={() => navigate(`/video/video-${video?._id}`)}>
        <div className="w-[12rem]">
            <img src={video?.thumbnail} alt={video?.title} />
        </div>
        <div className="text-sky-700 flex flex-col justify-around">
            <p className="w-[17rem] font-medium text-base">{video?.title}</p>
            <p className="w-[17rem] text-sm">{video?.creator}</p>
        </div>
    </div>
  )
}
