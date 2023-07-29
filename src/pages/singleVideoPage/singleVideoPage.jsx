import { useContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"

import { VideoContext } from "../../context/videoContext"

import { AiFillClockCircle, AiOutlineClockCircle, AiOutlineClose, AiOutlineComment } from "react-icons/ai"
import { RiPlayListAddLine } from "react-icons/ri"
import { PiPencilLineDuotone } from "react-icons/pi"
import {MdDone} from "react-icons/md"

export const SingleVideoPage = () => {
    const { videoID } = useParams()

    const addCommentRef = useRef()

    const { videos, watchLaterList, removeFromWatchLater, addToWatchLater, addComment, commentList, editComment, removeComment } = useContext(VideoContext)

    const [isAddCommentOpen, setIsAddCommentOpen] = useState(false)
    const [comment, setComment] = useState('')
    const [editedComment, setEditedComment] = useState('')
    const [isEditCommentOpen, setIsEditCommentOpen] = useState('')

    const video = videos?.find((video) => Number(videoID) === video?._id)

    const addNewNote = () => {
        addComment(comment, videoID)
        setIsAddCommentOpen(false)
    }

    const filteredComments = commentList.filter((comment) => comment.id === videoID)

    const modifyComment = (commentID) => {
        editComment(editedComment, commentID);
        setEditedComment('')
        setIsEditCommentOpen('')
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!addCommentRef?.current?.contains(e?.target)) {
                setIsAddCommentOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick, true)
        document.addEventListener("scroll", () => setIsAddCommentOpen(false))
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
            document.removeEventListener("scroll", () => setIsAddCommentOpen(false))
        }
    }, [])

    return (
        <div className="page">
            <div className="w-3/4">

                <iframe className="w-full h-[30rem] border" src={video?.src}></iframe>

                <div className="flex items-center justify-between px-2 border-b-2">

                    <div className="flex items-center gap-4 my-3">

                        <div className="flex justify-center items-center w-[40px]">
                            <img src="https://picsum.photos/40/40" alt="" className="rounded-full" />
                        </div>

                        <p className="font-semibold text-lg">{video.title}</p>
                    </div>

                    <div className="flex text-xl gap-2">

                        <div className="cursor-pointer">
                            {watchLaterList?.find((id) => id === video?._id) ?
                                <div className="p-2" onClick={() => removeFromWatchLater(video._id)}>
                                    <AiFillClockCircle />
                                </div>
                                :
                                <div className="p-2" onClick={() => addToWatchLater(video._id)}>
                                    <AiOutlineClockCircle />
                                </div>
                            }
                        </div>

                        <div className="p-2 cursor-pointer">
                            <RiPlayListAddLine />
                        </div>

                        <div className="p-2 cursor-pointer" onClick={() => setIsAddCommentOpen(!isAddCommentOpen)}>
                            <AiOutlineComment />
                        </div>

                        {isAddCommentOpen &&
                            <div className="menu shadow-[0_1px_5px_rgb(0,0,0,0.2)] fixed bg-white mt-8 -ml-52 p-2 rounded-md" ref={addCommentRef}>
                                <p className="mb-2 text-base font-medium">Add note</p>
                                <button className="absolute top-2 right-2" onClick={() => setIsAddCommentOpen(false)}><AiOutlineClose /></button>
                                <input type="text" name="" id="" className="outline-none border w-80 p-2 text-base" onChange={(event) => setComment(event.target.value)} />
                                <button className="block bg-sky-700 text-white w-11/12 text-sm p-2 rounded-md mt-2 m-auto" onClick={() => addNewNote()}>Add New Note</button>
                            </div>
                        }

                    </div>


                </div>

                <div className="my-2">

                    <p className="font-semibold text-xl">My Notes</p>

                    <div className="mt-4">
                        {filteredComments.map(({ comment, commentID }) => (
                            <div className="flex items-center justify-between" key={commentID}>
                                {isEditCommentOpen === commentID
                                    ?
                                    <div className="border p-2 w-3/4 flex justify-between items-center">
                                        <input type="text" name="" id="" defaultValue={comment} className="outline-none w-[90%]" onChange={(event) => setEditedComment(event.target.value) } />
                                        <button className="px-4" onClick={() => modifyComment(commentID)}><MdDone /></button>
                                    </div>
                                    :
                                    <p className="py-2">{comment}</p>
                                }
                                <div className="text-xl">
                                    <button className="mr-4" onClick={() => setIsEditCommentOpen(commentID)}><PiPencilLineDuotone /></button>
                                    <button onClick={() => removeComment(commentID)}><AiOutlineClose /></button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}
