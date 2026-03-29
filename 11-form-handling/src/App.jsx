import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("From Submited");
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text"  placeholder='Enter Your Name' />
        
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
