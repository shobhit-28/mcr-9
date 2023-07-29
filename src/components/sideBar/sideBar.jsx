import { NavLink } from 'react-router-dom'

import {AiFillCompass, AiOutlineClockCircle, AiTwotoneHome} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'

export const SideBar = () => {

  return (
    <div className='fixed w-48 h-full pl-4 flex flex-col gap-6 pt-36 shadow-[0_1px_5px_rgb(0,0,0,0.2)]'>
        <NavLink className={({isActive}) => `flex gap-2 items-center text-xl ${isActive && 'text-sky-600 italic'}`} to={'/'}>
            <AiTwotoneHome />
            <span className="">Home</span>
        </NavLink>
        <NavLink className={({isActive}) => `flex gap-2 items-center text-xl ${isActive && 'text-sky-600 italic'}`} to={'/explore'}>
            <AiFillCompass />
            <span className="">Explore</span>
        </NavLink>
        <NavLink className={({isActive}) => `flex gap-2 items-center text-xl ${isActive && 'text-sky-600 italic'}`} to={'/playlist'}>
            <RiPlayListAddFill />
            <span className="">Playlists</span>
        </NavLink>
        <NavLink className={({isActive}) => `flex gap-2 items-center text-xl ${isActive && 'text-sky-600 italic'}`} to={'/watchlater'}>
            <AiOutlineClockCircle />
            <span className="">Watch later</span>
        </NavLink>
    </div>
  )
}
