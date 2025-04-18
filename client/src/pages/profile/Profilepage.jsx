import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
const PF = import.meta.env.VITE_PUBLIC_FOLDER;
function Profilepage() {
  return (
    <div>
       <Topbar/>
    <div className='flex'>
        <SideBar/>
            <div className='flex-grow'>
                <div className=' '>
                    <div className='h-80 relative'>
                    <img className= "w-full h-60  object-cover" src = {`${PF}post/3.jpeg`} alt=""/>
                    <img className= "w-40 h-40 rounded-full object-cover absolute bottom-[-20px] border-4  left-5 " src = {`${PF}person/7.jpeg`} alt=""/>
                    </div>
                    <div className='flex flex-col p-8'>
                        <h4 className='text-2xl font-bold'>Travis Bennett</h4>
                        <span className='font-semibold'>Hello there!</span>
                    </div>
                    
                </div>
                <div className='flex'>
                    <Feed/>
                    <RightBar profile={true}/>
                </div>
        
        </div>
     
        </div>
    </div>
  )
}

export default Profilepage
