import React, { useContext, useEffect, useState } from 'react'
import Online from '../online/Online'
import UserFriends from '../userfriends/UserFriends'
import { Users } from '../../dummyData';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import AddIcon from '@mui/icons-material/Add';

function RightBar({user}) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [friends,setFriends] = useState([])
  const {user:currentUser, dispatch}= useContext(AuthContext)
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if (user && currentUser) {
      setFollowed(currentUser.following.includes(user._id));
    }
  }, [user, currentUser]);


   useEffect(()=>{
    if(user){
    const getFriends = async()=>{
      try {
        const friendList = await axios.get(`/api/users/friends/${user._id}`)
        // console.log(friendList.data)
        setFriends(friendList.data)
      } catch (err) {
        console.error(err)
      }
    };
    getFriends();
  }
  },[user])
  
  const handleClick = async()=>{
    try {
        if(followed){
          await axios.put(`/api/users/${user._id}/unfollow`, {userId: currentUser._id})
        dispatch({type:"UNFOLLOW", payload:user._id})
        }
        else{
          await axios.put(`/api/users/${user._id}/follow`, {userId: currentUser._id})
          dispatch({type:"FOLLOW", payload:user._id})
        }
        setFollowed(!followed);
    } catch (err) {
       console.error(err);
    }
    
  }

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
      {user.username!== currentUser.username && (
            <button onClick={handleClick} className="rightbarFollowButton mt-10 mb-5 border-none bg-blue-500 rounded-md p-2 font-semibold cursor-pointer items-center text-lg text-white tracking-tighter hover:bg-blue-400">
              {followed ? ("Unfollow"):
              (
              <span>
              Follow <AddIcon className='mb-1'/>
              </span>
              )}
            </button>
        )}
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
        {friends.map((friend)=>(
          <UserFriends key={friend._id} user={friend}/>
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
