import React from 'react'
import Share from '../share/Share'
import { useEffect, useState } from 'react'
import Post from "../post/Post"
import axios from "axios"
function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async()=>{
      try{
      const res = username
      ? await axios.get(`/api/posts/profile/${username}`)
      : await axios.get("/api/posts/timeline/67fc0ef40774b11cd1b6ae87");
      setPosts(res.data)
      }catch(err){
        console.error(err);
      }
    }
    fetchPosts();
  },[])

  return (
  <div className='flex-grow'>
    <div className='p-8'>
    <Share/>
      {posts.map((p)=>(
        <Post key={p._id} post={p} />
      ))}
    </div>
  </div>
    
  );
}

export default Feed
