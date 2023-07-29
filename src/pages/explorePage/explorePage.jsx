/* eslint-disable no-unsafe-optional-chaining */

import { useContext, useState } from "react"
import { VideoContext } from "../../context/videoContext"
import { VideoCard } from "../../components/videoCard/videoCard"

export const ExplorePage = () => {

  const { videos } = useContext(VideoContext)

  const [searchResults, setSearchResults] = useState(videos)

  const searchVideos = (event) => {
    setSearchResults(
      [
        ...videos?.filter((video) => video?.title?.slice(0, event?.target?.value.length).toLowerCase() === event?.target?.value.toLowerCase()),
        ...videos?.filter((video) => video?.title?.slice(0, event?.target?.value.length).toLowerCase() !== event?.target?.value.toLowerCase())
          ?.filter((video) => video?.title.toLowerCase()?.includes(event?.target?.value?.toLowerCase()))
      ]
    )
  }

  return (
    <div className="page">
      <h1 className="text-4xl font-semibold">Explore</h1>
      <input type="text" name="" id="" className="border outline-none py-2 px-4 my-6 w-full rounded-3xl text-center text-lg font-medium" placeholder="Search video by title" onChange={(event) => searchVideos(event)} />
      {searchResults?.length > 0
        ?
        <div className="flex flex-wrap gap-8">
          {searchResults.map((video) => <VideoCard key={video._id} videoDetails={video} />)}
        </div>
        :
        <p className="text-2xl font-medium text-center my-6">Not Found</p>
      }
    </div>
  )
}
