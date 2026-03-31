import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   console.log(data)
  // }

  // by using axios
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map((elem, idx) => {
          return (
            <div key={idx}>
              <h3>Hello, {elem.author}</h3>
              <img src={elem.download_url} width="200" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App