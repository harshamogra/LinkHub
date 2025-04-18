import React from 'react'
const PF = import.meta.env.VITE_PUBLIC_FOLDER;

function UserFriends({user}) {
  return (
    <div className=' flex flex-col mb-5 cursor-pointer'>
      <img className='w-24 h-24 object-cover rounded-md' src={`${PF}${user.profilePicture}`} alt="" />
      <span className=''>{user.username}</span>
    </div>
  )
}

export default UserFriends
