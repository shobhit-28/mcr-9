import { useContext } from "react"
import { useParams } from "react-router-dom"

import { VideoContext } from "../../context/videoContext"
import { VideoCard } from "../../components/videoCard/videoCard"

export const SingleCategoryPage = () => {
    const { categoryID } = useParams()

    const { categories, videos } = useContext(VideoContext)

    const currCategory = categories?.find(({ _id }) => _id === categoryID)
    const filteredVideos = videos?.filter(({ category }) => category === currCategory?.category)

    return (
        <div className="page">
            <h1 className="text-4xl font-semibold">{currCategory?.category}</h1>
            <div className="flex flex-wrap gap-4 mt-12">
                {filteredVideos?.map((video) => <VideoCard key={video?._id} videoDetails={video} />)}
            </div>
        </div>
    )
}
