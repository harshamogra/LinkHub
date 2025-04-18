import React from 'react'
const PF = import.meta.env.VITE_PUBLIC_FOLDER;

function CloseFriend({user}) {
  return (
    <div>
        <li className='flex items-center mt-3 mb-4'>
                <img className="w-8 h-8 rounded-full object-cover mr-3" src={`${PF}${user.profilePicture}`} alt='profilepicture'/>
                <span>{user.username}</span>
        </li>
    </div>
  )
}

export default CloseFriend
