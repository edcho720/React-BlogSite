import React from 'react'
import Post from "./Post"

function Posts({formData, posts}) {

    console.log(posts)
    console.log(formData)

    const blogPosts = posts.map( (post, i) => ( <Post key={i} formData={formData} /> ))

  return (
    <div className="blogs-display">
        {blogPosts}
    </div>
  )
}

export default Posts;