import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import { Users } from '../../dummyData'

function Post({post}) {
   const[like,setLike] = useState(post.like)
   const[isliked, setIsLiked]  = useState(false)
   const PF = import.meta.env.VITE_PUBLIC_FOLDER;

   

   const likeHandler = ()=>{
    setLike(isliked ? like-1 : like+1 )
    setIsLiked(!isliked)
   }



  return (
    <div className='w-full rounded-lg shadow-custom mt-8 mb-8'>
        <div className='p-2'>
            {/* post-top */}
            <div className='flex items-center  justify-between'>
                <div className=' flex items-center '>
                <img className="w-8 h-8 rounded-full object-cover" src={`${PF}${Users.filter((u) => u.id === post?.userId)[0].profilePicture}`} alt=""/>

                    <div className='ml-3 flex flex-col justify-center'>
                        <span className='font-semibold block'>{Users.filter(u=>u.id=== post?.userId)[0].username}</span>
                        <span className='text-xs text-gray-500 '>{post.date}</span>
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
            <img src = {`${PF}${post.photo}`} alt="post" className='mt-5 w-full max-h-full  '/>
        </div>
            {/* post-bottom */}
        <div className='flex items-center justify-between m-3'>
            <div className='flex items-center mb-3'>
                <img className='w-6 h-6 mr-1 cursor-pointer' src = "assets/like.png" onClick={likeHandler} alt=""/>
                <img className="w-6 h-6 mr-1 cursor-pointer" src="assets/heart.png" onClick={likeHandler} alt=""/>
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
