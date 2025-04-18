import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from "axios"
function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async()=>{
      try{
      const res = await axios.get("/api/posts/timeline/67fc0ef40774b11cd1b6ae87")
      setPosts(res.data)
      }catch(err){
        console.err(err);
      }
    }
    fetchPosts();
  },[])

  return (
  <div className='flex-grow'>
    <div className='p-8'>
    <Share/>
    {posts}
    </div>
    
  </div>
    
  )
}

export default Feed
