import React, { useContext } from 'react'
import { Search } from '@mui/icons-material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "../../App.css"; // Correct path to App.css from Topbar.jsx
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Topbar() {
  const {user} = useContext(AuthContext)
  console.log(user?.username);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    //topbar container
    <div className =" flex items-center  sticky top-0 h-[50px] w-full bg-blue-500 z-[999] "> 
       {/* topbarleft */}
       <div className="flex flex-grow items-center">
        <Link to="/">
        <span className="font-roboto text-2xl font-bold ml-3 p-3 text-white cursor-pointer ">
          Link <HandshakeIcon/> Hub
        </span>
        </Link>
        
      </div>

      {/* topbarmiddle */}
      <div className="flex-grow flex justify-center items-center ">
        <div className="w-full h-[30px] bg-white rounded-[30px] flex items-center px-2 shadow-md">
        <Search className="text-gray-400 text-xl  "/>
        <input className=" border-none w-[70%] pl-2 focus:outline-none"  placeholder='Search for your friends, post or video' />
        </div>
      </div>
      {/* topbarright */}
      <div className="flex items-center justify-around text-white px-8">
        {/* topbarlinks */}
        <div className="px-44 mr-32 size-4 pb-5 pl-16 cursor-pointer ">
          <Link to= "/">
          <span className="mr-3 px-5 size-4 cursor-pointer">Homepage</span>
          <span className="mr-3 size-4 cursor-pointer">Timeline</span>
          </Link>
        </div>
        {/* topbaricons */}
        <div className="flex items-center pr-24">
            <div className="mr-4 cursor-pointer relative">
              <PersonIcon/>
              {/*notifications*/}<span className="w-4 h-4 bg-red-700 rounded-full text-white absolute flex items-center top-[-5px] right-[-5px] justify-center">1</span>
            </div>
            <div className="mr-4 cursor-pointer relative">
              <ChatIcon/>
              {/*notifications*/}<span className="w-4 h-4 bg-red-700 rounded-full text-white absolute flex items-center top-[-5px] right-[-5px] justify-center">1</span>
            </div>
            <div className="mr-4 cursor-pointer relative">
              <NotificationsIcon/>
              {/*notifications*/}<span className="w-4 h-4 bg-red-700 rounded-full text-white absolute flex items-center top-[-5px] right-[-5px] justify-center object-cover cursor-pointer">1</span>
            </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+ user.profilePicture : PF+"person/noAvatar.png"} alt="profilepicture" className="w-8 h-8 rounded-full object-cover " />

        </Link>
      </div>

    </div>
  )
}

export default Topbar
