import React, {useState} from 'react'

const App = () => {

 // const [num,setNum] = useState([10,20,30])

 const [num, setNum] = useState({user:'Rishi', age:17})

  const btnClicked = () => {
    // const newNum = [...num]
    // newNum.push(99)

    // setNum(newNum) this is first way you can done by this way also

    setNum(prev =>({...prev,age:50})) //this is second way
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
