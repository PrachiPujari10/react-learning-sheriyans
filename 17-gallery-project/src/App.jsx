import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      
      <div className='flex flex-wrap gap-4 p-2'>
        {userData.length > 0 ? (
          userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))
        ) : (
          <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
            Loading...
          </h3>
        )}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        
        <button
          disabled={index === 1}
          className='bg-amber-400 disabled:opacity-50 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => setIndex(index - 1)}
        >
          Prev
        </button>

        <h4>Page {index}</h4>

        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App