import React from 'react'
// import './Card.css'

const Card = (props) => {
    const classes = 'card' + props.children;
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default Card