import { useContext } from "react"
import { VideoContext } from "../../context/videoContext"
import { VideoCard } from "../../components/videoCard/videoCard"

export const WatchLaterPage = () => {
  const { watchLaterList, videos } = useContext(VideoContext)

  const filteredData = videos?.filter((video) => (
    watchLaterList.some((watchLaterID) => watchLaterID === video?._id)
  ))

  return (
    <div className="page">
      <h1 className="text-4xl font-semibold">Watch Later</h1>
      <div className="pt-12">
        {watchLaterList?.length > 0
          ?
          <div className="flex flex-wrap gap-6">
            {filteredData.map((video) => <VideoCard key={video._id} videoDetails={video} />)}
          </div>
          :
          <p className="text-2xl font-medium text-center my-6">Add Videos to watchLater</p>
        }
      </div>
    </div>
  )
}
