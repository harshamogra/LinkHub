import React from 'react'
import { Link } from 'react-router-dom';
const PF = import.meta.env.VITE_PUBLIC_FOLDER;

function UserFriends({user}) {
  return (
    <Link to={`/profile/${user.username}`}>
    <div className=' flex flex-col mb-5 cursor-pointer'>
      <img className='w-24 h-24 object-cover rounded-md' src={user.profilePicture ? `${PF}${user.profilePicture}` : `${PF}person/noAvatar.png`} alt="" />
      <span className=''>{user.username}</span>
    </div>
    </Link>
  )
}

export default UserFriends
