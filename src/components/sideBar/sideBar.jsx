import { useNavigate } from 'react-router-dom'

import {AiFillCompass, AiOutlineClockCircle, AiTwotoneHome} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'

export const SideBar = () => {
    const navigate = useNavigate()

  return (
    <div className='fixed w-48 h-full pl-4 flex flex-col gap-6 pt-36 shadow-[0_1px_5px_rgb(0,0,0,0.2)]'>
        <p className="flex gap-2 items-center text-xl cursor-pointer" onClick={() => navigate('/')}>
            <AiTwotoneHome />
            <span className="">Home</span>
        </p>
        <p className="flex gap-2 items-center text-xl cursor-pointer" onClick={() => navigate('/explore')}>
            <AiFillCompass />
            <span className="">Explore</span>
        </p>
        <p className="flex gap-2 items-center text-xl cursor-pointer" onClick={() => navigate('/watchlater')}>
            <RiPlayListAddFill />
            <span className="">Playlists</span>
        </p>
        <p className="flex gap-2 items-center text-xl cursor-pointer" onClick={() => navigate('/playlist')}>
            <AiOutlineClockCircle />
            <span className="">Watch later</span>
        </p>
    </div>
  )
}
