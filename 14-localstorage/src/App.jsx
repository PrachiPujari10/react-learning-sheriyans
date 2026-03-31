import React from 'react'

const App = () => {

  
  // const user = localStorage.getItem('user')

  // console.log(user);

  // localStorage.setItem('user','Prachi')

  //localStorage.removeItem('user')

  // const user = {
  //   username:'Sarthak',
  //   age:18,
  //   city:'Bhopal'
  // }

  // console.log(user)

  // localStorage.setItem('user',JSON.stringify(user))

  const user = JSON.parse(localStorage.getItem('user'))

  console.log(user);

  return (
    <div>
      
    </div>
  )
}

export default App
