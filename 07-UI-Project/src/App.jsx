import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop',
      intro: 'Lorem ipsum dolor sit amet.',
      color: 'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop',
      intro: 'Lorem ipsum dolor sit amet.',
       color: 'lightseagreen',
      tag: 'UnderServed'
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop',
      intro: 'Lorem ipsum dolor sit amet.',
       color: 'orange',
      tag: 'UnderBanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1681823043769-a7c20809a756?q=80&w=1470&auto=format&fit=crop',
      intro: 'Lorem ipsum dolor sit amet.',
      color: 'pink',
      tag: 'UnderBear'
    },
     {
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet.',
       color: 'black',
      tag: 'UnderPressure'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App