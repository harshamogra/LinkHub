import React, { useState,useEffect } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PF = import.meta.env.VITE_PUBLIC_FOLDER;
function Profilepage() {
const [user,setUser] = useState({})
const username = useParams().username;
useEffect(()=>{
       const fetchUser = async()=>{
         try{
         const res = await axios.get(`/api/users?username=${username}`)
         setUser(res.data)
         }catch(err){
           console.error(err);
         }
       }
       fetchUser();
},[username])


  return (
    <div>
       <Topbar/>
    <div className='flex'>
        <SideBar/>
            <div className='flex-grow'>
                <div className=' '>
                    <div className='h-80 relative'>
                    <img className= "w-full h-60  object-cover" src = {user.coverPicture ? PF + user.coverPicture :PF + "person/noCover.jpg"} alt=""/>
                    <img className= "w-40 h-40 rounded-full object-cover absolute bottom-[-20px] border-4  left-5 " src = {user.profilePicture ? PF+user.profilePicture : PF + "person/noAvatar.png"} alt=""/>
                    </div>
                    <div className='flex flex-col p-8'>
                        <h4 className='text-2xl font-bold'>{user.username}</h4>
                        <span className='font-semibold'>{user.desc}</span>
                    </div>
                    
                </div>
                <div className='flex'>
                    <Feed username = {username}/>
                    <RightBar user = {user}/>
                </div>
        
        </div>
     
        </div>
    </div>
  )
}

export default Profilepage
