import { MoreVert } from '@mui/icons-material'
import React, { useState, useEffect, useContext } from 'react'
import {format} from "timeago.js"
import axios from "axios"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Post({post}) {
   const[like,setLike] = useState(post.likes.length)
   const[isliked, setIsLiked]  = useState(false)
   const [user,setUser] = useState({})
   const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext) //currentUser is a nickname
    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])
   useEffect(()=>{
       const fetchUser = async()=>{
         try{
         const res = await axios.get(`/api/users?userId=${post.userId}`)
         setUser(res.data)
         }catch(err){
           console.error(err);
         }
       }
       fetchUser();
     },[post.userId])

   const likeHandler = ()=>{
    try{
        axios.put(`/api/posts/${post._id}/like`, {userId:currentUser._id})
    }
    catch(err){
        
    }
    setLike(isliked ? like-1 : like+1 )
    setIsLiked(!isliked)
   }



  return (
    <div className='w-full rounded-lg shadow-custom mt-8 mb-8'>
        <div className='p-2'>
            {/* post-top */}
            <div className='flex items-center  justify-between'>
                <div className=' flex items-center '>
                    <Link to={`profile/${user.username}`}>
                    <img className="w-8 h-8 rounded-full object-cover" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt=""/>
                    </Link>
                
                    <div className='ml-3 flex flex-col justify-center'>
                        <span className='font-semibold block'>{user.username}</span>
                        <span className='text-xs text-gray-500 '>{format(post.createdAt)}</span>
                    </div>
                </div>
                <div>
                    <MoreVert/>
                </div>
            </div>
        </div>
    
            {/* post-center */}
        <div className='m-3'> 
            <span>{post?.desc}</span>
            {post?.img && <img src = {PF+post.img} alt="post" className='mt-5 w-full max-h-full  '/>}
        </div>
            {/* post-bottom */}
        <div className='flex items-center justify-between m-3'>
            <div className='flex items-center mb-3'>
                <img className='w-6 h-6 mr-1 cursor-pointer' src = {`${PF}like.png`} onClick={likeHandler} alt=""/>
                <img className="w-6 h-6 mr-1 cursor-pointer" src={`${PF}heart.png`} onClick={likeHandler} alt=""/>
                    <div>
                        <span className='size-3 text-sm font-semibold select-none'>{like} people like it</span>
                    </div>
            </div>
            <div className='mb-3'>
                <span className=" cursor-pointer border-b-[1px] border-dashed border-gray-400 text-sm ">{post.comment} comments</span>
            </div>

        </div>
        
    </div>
  )
}

export default Post
