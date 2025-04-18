import React from 'react'
const PF = import.meta.env.VITE_PUBLIC_FOLDER;

function Online({user}) {
  return (
    <div>
      <li className='flex items-center mb-4'>
                <div className='mr-3 relative '>
                  <img className="  w-10 h-10 rounded-full object-cover" src={`${PF}${user.profilePicture}`} alt="friend"/>
                  <span className='w-3 h-3 rounded-full bg-green-400 absolute top-[-2px] ml-6 border-2 border-white border-solid'></span>
                </div>
                <span className='font-semibold'>{user.username}</span>
              </li>
    </div>
  )
}

export default Online
