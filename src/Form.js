import React from 'react'

function Form({formData, handleChange, handleSubmit}) {
// console.log(formData)

  return (
    <div>
        <form className="form-design" onSubmit={handleSubmit}>
            <label htmlFor="title">
                <input 
                id="title" 
                type="text" 
                placeholder="Title" 
                onChange={handleChange}
                name="title"
                value={formData.title}
                >        
                </input>
            </label>
            <label htmlFor="date">
                <input 
                id="date" 
                type="text" 
                placeholder="Date"
                onChange={handleChange}
                name="date"
                value={formData.date}
                >
                </input>
            </label>
            <label htmlFor="body">
                <textarea 
                id="body" 
                placeholder="write your post here" 
                onChange={handleChange}
                name="body"
                value={formData.body}
                />
            </label>
            <button className="button-design">Submit</button>
        </form>
    </div>
  )
}

export default Form;