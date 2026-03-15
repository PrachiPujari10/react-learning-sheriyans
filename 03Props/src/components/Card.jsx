import React from 'react'


const Card = (props) => {
    console.log(props);
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1772289935544-e5e6cf99adc9?q=80&w=387&auto=format&fit=crop"
          alt="profile"
        />

        <h2>{props.user}</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button>New Profile</button>
      </div>
    </div>
  )
}

export default Card
