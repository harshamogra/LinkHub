import React from 'react'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import UserFriends from '../userfriends/UserFriends'


function RightBar({user}) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const HomeRightBar = ()=>{
    return(
      <>
          <div className='flex items-center'>
                <img className="w-10 h-10 mr-2" src ={`${PF}gift.png`} alt=""/>
                <div>
                <span className='font-light size-4' >
                  <b className='font-bold'>Dave</b> and <b className='font-bold'>3 other friends</b> have a birthday today
                </span>
                </div>
            </div>
            <img className='w-full rounded-md mt-7 mb-7 ' src={`${PF}ad.png`} alt="ad"/>
            <h4 className='mb-3 mt-9 text-xl font-semibold'>Online Friends</h4>
            <ul className='p-0 m-0'>
                {Users.map(u=>(
                  <Online key = {u.id} user ={u}/>
                ))}
            </ul>
      </>
    )
  }
  
  const ProfileRightBar = ()=>{
    return(
      <>
      <h4 className='text-xl font-semibold mb-2'>User Information</h4>
      <div className='mb-7'>
        <div className='mb-3'>
          <span className='font-semibold mr-4 text-slate-500'>City:</span>
          <span className='font-light'>{user.city}</span>
        </div>
        <div className='mb-3'>
          <span className='font-semibold mr-4 text-slate-500'>From:</span>
          <span className='font-light'>{user.from}</span>
        </div>
        <div className='mb-3'>
          <span className='font-semibold mr-4 text-slate-500'>Relationship:</span>
          <span className='font-light'>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Empty" }</span>
        </div>
      </div>
      <h4>User friends</h4>
      <div className='flex flex-wrap justify-between'>
        {Users.map(u=>(
          <UserFriends key={u.id} user={u}/>
        ))}
      </div>
      </>
    )
  }
  return (
    <div className='flex'>
      <div className=' pt-5 pr-5 '>
        {user ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}

export default RightBar
