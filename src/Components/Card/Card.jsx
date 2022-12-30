import React from 'react'
import './Card.css'

const Card = ({emoji,heading,detail,button}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <p>{detail}</p>
        <button>{button}</button>
    </div>
  )
}

export default Card