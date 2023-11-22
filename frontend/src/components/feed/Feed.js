import React, { useEffect, useState } from 'react';
import Post from '../post/Post'
import NewPost from '../post/NewPost';
import NewComment from '../comment/NewComment';

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [reRender, setReRender] = useState(false);

  const fetchPosts = () => {
    fetch("/api/posts", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(async data => {
        window.localStorage.setItem("token", data.token)
        setToken(window.localStorage.getItem("token"))
        setPosts(data.posts.reverse());
        setReRender(false)
      })
  }
  useEffect(() => {
    if(token) {
      fetchPosts()
    }
    else {
      navigate('/login')}
  }, [reRender])

  const updateComments = (postId, newComments) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, comments: newComments } : post
      )
    );
  };
  
    if(token && posts) {
      console.log("posts", posts)
      return(
        <>
          <NewPost posts={posts} setPosts={setPosts} setReRender={ setReRender }/>
          <h1>Posts</h1>
          <div id='feed' role="feed" className='flex-centre'>
              {posts.map(
                (post) => ( <Post post={ post } key={ post._id } fetchPosts={ fetchPosts}/> )
              )}
          </div>
        </>
      )
    } else {
      navigate('/login')
    }
}

export default Feed;
