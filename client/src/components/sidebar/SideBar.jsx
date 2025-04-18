import React from 'react'
import { Bookmark, Chat, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, Event, WorkOutline } from '@mui/icons-material'
import { Users } from '../../dummyData'
import CloseFriend from '../closefriend/CloseFriend'
function SideBar() {
  return (
    <div className='md:flex hidden h-screen pt-8 overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 sticky top-12'>
        <div className='p-6'>
            <ul className='p-0 m-0 '>
                <li className='flex items-center mb-5 '>
                    <RssFeed className='mr-4'/>
                    <span className=''>Feed</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <Chat className='mr-4'/>
                    <span className=''>Chats</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <PlayCircleFilledOutlined className='mr-4'/>
                    <span className=''>Videos</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <Group className='mr-4'/>
                    <span className=''>Groups</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <Bookmark className='mr-4'/>
                    <span className=''>Bookmarks</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <HelpOutline className='mr-4'/>
                    <span className=''>Questions</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <WorkOutline className='mr-4'/>
                    <span className=''>Jobs</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <Event className='mr-4'/>
                    <span className=''>Events</span>
                </li>
                <li className='flex items-center mb-5 '>
                    <School className='mr-4'/>
                    <span className=''>Courses</span>
                </li>
            </ul>
           <button className='w-36 border-none p-3 rounded-md font-semibold bg-slate-200 hover:opacity-50'>Show More</button>
            <hr className='mt-5 w-80 ' />
            <ul className='p-0 m-0'>
                {Users.map(u=>(
                    <CloseFriend key ={u.id} user = {u}/>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SideBar
