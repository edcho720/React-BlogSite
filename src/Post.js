import React from 'react'

function Post({formData}) {

    console.log(formData)
  return (
    <div className="post-design">
        <h1>{formData.title}</h1>
        <h4>{formData.date}</h4>
        <p>{formData.body}</p>
    </div>
  )
}

export default Post