import {AiFillCompass, AiOutlineClockCircle, AiTwotoneHome} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'

export const SideBar = () => {
  return (
    <div className='fixed w-48 h-full pl-4 flex flex-col gap-6 pt-36 shadow-[0_1px_5px_rgb(0,0,0,0.2)]'>
        <p className="flex gap-2 items-center text-xl cursor-pointer">
            <AiTwotoneHome />
            <span className="">Home</span>
        </p>
        <p className="flex gap-2 items-center text-xl cursor-pointer">
            <AiFillCompass />
            <span className="">Explore</span>
        </p>
        <p className="flex gap-2 items-center text-xl cursor-pointer">
            <RiPlayListAddFill />
            <span className="">Playlists</span>
        </p>
        <p className="flex gap-2 items-center text-xl cursor-pointer">
            <AiOutlineClockCircle />
            <span className="">Watch later</span>
        </p>
    </div>
  )
}
