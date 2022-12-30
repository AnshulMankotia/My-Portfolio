import React from 'react'
import './FloatingIcons.css'
const FloatingIcons = ({image,txt1,txt2}) => {
  return (
   <div className="floatingicons">
    <img src={image} alt="" />
    <span>
        {txt1}
         <br />
         {txt2}
    </span>
   </div>
  )
}

export default FloatingIcons