import { useContext, useState } from 'react';

import { VideoContext } from "../../context/videoContext"
import { PlayListCard } from '../../components/playListCard/playListCard';

import { AiOutlinePlus } from 'react-icons/ai';

export const PlaylistPage = () => {

  const { playList, addNewPlayList } = useContext(VideoContext)

  const [isAddPlayListOpen, setIsAddPlayListOpen] = useState(false)
  const [playListDetails, setPlayListDetails] = useState({ playlistName: '', playListDescription: '', videos: [] })

  const addNewPlayListClickHandler = () => {
    if (playListDetails.playlistName !== "") {
      if (playListDetails.playListDescription !== "") {
          addNewPlayList(playListDetails)
          setPlayListDetails({ playlistName: '', playListDescription: '', videos: [] })
          setIsAddPlayListOpen(false)      
      } else {
          alert('Playlist should have a description')
      }
  } else {
      alert('Playlist must have a name')
  }
  }

  return (
    <div className="page">
      <h1 className="text-4xl font-semibold">Playlist</h1>
      {
        <div className="flex flex-wrap gap-4 pt-12">
          {playList?.map(({ playListID, playListName, playListDesc, videos }) => (
            <PlayListCard key={playListID} playListName={playListName} playListDesc={playListDesc} videos={videos} playListID={playListID} />
          ))}
          <button onClick={() => setIsAddPlayListOpen(true)} className="w-[18.75rem] cursor-pointer hover:border-black/40 border-[.1rem] border-dashed duration-500 flex justify-center items-center text-9xl text-black/75 hover:bg-sky-50 hover:text-black">
            <AiOutlinePlus />
          </button>
        </div>
      }
      {isAddPlayListOpen &&
        <div className="fixed top-0 right-0 w-screen h-screen bg-black/5 z-20 flex justify-center items-center" onClick={() => setIsAddPlayListOpen(false)}>
          <div className="p-4 rounded-lg w-[19rem] bg-white hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[0_1px_5px_rgb(0,0,0,0.2)] duration-500" onClick={(event) => event.stopPropagation()}>
            <p className="block text-center my-2 font-medium text-lg">Add New Playlist</p>
            <input type="text" name="" id="" className='block w-[90%] m-auto outline-none border my-2 p-2 text-sm' placeholder='Enter the name of playlist' onChange={(event) => setPlayListDetails({ ...playListDetails, playlistName: event.target.value })} />
            <input type="text" name="" id="" className='block w-[90%] m-auto outline-none border my-2 p-2 text-sm' placeholder='Enter the description of playlist' onChange={(event) => setPlayListDetails({ ...playListDetails, playListDescription: event.target.value })} />
            <button onClick={() => addNewPlayListClickHandler()} className='block bg-sky-700 text-white p-2 rounded-md text-sm m-auto my-2 w-[80%] hover:bg-sky-600'>Done</button>
          </div>
        </div>}
    </div>
  )
}
