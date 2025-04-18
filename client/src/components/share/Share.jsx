import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'
import React from 'react'

function Share() {
  return (
    <div className='flex-grow w-full h-44 rounded-2xl shadow-custom  '>
        <div className='p-3'>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full object-cover mr-3' src="/assets/person/1.jpeg" alt=''/>
                <input className=' border-none w-72 focus:outline-none' placeholder="What's in your mind name?" />
            </div>
            <hr className='m-5 '/>
            <div className='flex items-center justify-between'>
                <div className='flex ml-5'>
                    <div className=' items-center mr-4 cursor-pointer '>
                    <PermMedia className='size-5 mr-1 text-red-500'/>
                    <span className='size-4 font-semibold'>Photo or Video</span>
                    </div>
                    <div className=' items-center mr-4 cursor-pointer '>
                    <Label className='size-5 mr-1 text-blue-500 '/>
                    <span className='size-4 font-semibold'>Tag</span>
                    </div>
                    <div className=' items-center mr-4 cursor-pointer '>
                    <Room className='size-5 mr-1 text-green-600'/>
                    <span className='size-4 font-semibold'>Location</span>
                    </div>
                    <div className=' items-center mr-4 cursor-pointer '>
                    <EmojiEmotions className='size-5 mr-1 text-yellow-400'/>
                    <span className='size-4 font-semibold'>Feelings</span>
                    </div>
                </div>
                <button className='border:none p-2 rounded-md font-semibold text-white bg-blue-400 padding shadow-md hover:bg-slate-500 cursor-pointer'>Share</button>
            </div>
        </div>
    </div>
   

  )
}

export default Share
