import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Header from "./Header"
import About from "./About"
import Form from "./Form"
import Posts from "./Posts"

function App() {

  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState(
    {
      title: "", 
      date: "", 
      body: ""
    });

  function handleChange(e) {
    const {name, value} = e.target
    // console.log(name, value)
    setFormData(oldData => ({...oldData, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPosts(oldPosts => [...oldPosts, formData])
    setFormData({
      title: "", 
      date: "", 
      body: ""
    });

    console.log("submitted", formData, posts)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={
          <Form 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />} 
        />
        {<Route path ="/posts" element={
          <Posts 
            formData={formData} 
            posts={posts}
          />} 
        /> }
        <Route path ="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
