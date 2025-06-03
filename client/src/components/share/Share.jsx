import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import { toast } from 'react-toastify';

function Share() {
    const {user} = useContext(AuthContext);
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    const desc = useRef();
    const [file,setFile] = useState(null)
    const submitHandler= async(e)=>{
        e.preventDefault();
        const newPost = {
            userId : user._id,
            desc: desc.current.value,
        }
        if(file){
            const data = new FormData();
            const fileName = Date.now()+file.name
            data.append("name",fileName)
            data.append("file",file)
            newPost.img = fileName;
            console.log(data);
            try {
                await axios.post('/api/upload',data)
            } catch (err) {
                console.error(err)
            }
        }
        try {
            await axios.post("/api/posts/newpost", newPost)
            window.location.reload();
        } catch (err) {
            toast.error("Failed to create post")
        }
    }
  return (
    <div className='flex-grow w-full h-44 rounded-2xl shadow-custom  '>
        <div className='p-3'>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full object-cover mr-3' src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt=''/>
                <input className=' border-none w-72 focus:outline-none' ref={desc} placeholder={"What's in your mind "+user.username+ " ?"} />
            </div>
            <hr className='m-5 '/>
            <form className='flex items-center justify-between' onSubmit={submitHandler}>
                <div className='flex ml-5'>
                    <div className=' items-center mr-4 cursor-pointer '>
                    <label htmlFor='file'>
                    <PermMedia className='size-5 mr-1 text-red-500'/>
                    <span className='size-4 font-semibold cursor-pointer'>Photo or Video</span>
                    <input type='file' id="file" accept='.png, .jpg, .jpeg, .mp4, .mkv,' onChange={(e)=>setFile(e.target.files[0])} className='hidden'/>
                    </label>
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
                <button className='border:none p-2 rounded-md font-semibold text-white bg-blue-400 padding shadow-md hover:bg-slate-500 cursor-pointer' type='submit'>Share</button>
            </form>
        </div>
    </div>
   

  )
}

export default Share
