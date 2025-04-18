import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import SideBar from '../../components/sidebar/SideBar'

import RightBar from '../../components/rightbar/RightBar'
import Feed from '../../components/feed/Feed'

function Home() {
  return (
    <div>
      <Topbar/>
    <div className='flex'>
      <SideBar/>
      <Feed/>
      <RightBar/>
    </div>
  </div>
  )
}

export default Home
