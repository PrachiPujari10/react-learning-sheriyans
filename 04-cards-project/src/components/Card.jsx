import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className="card">

        <div className="top">
          <img src={props.brandlogo} alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>% days ago</span></h3>
          <h2>{props.post}</h2>

          <div className="tag">
            <h4>{props.tag}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="bottom">
          <div className="salary">
            <h3>{props.pay}</h3>
            <p>Mumbai, India</p>
          </div>

          <button>Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default Card