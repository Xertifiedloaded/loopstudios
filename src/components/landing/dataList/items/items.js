import React from 'react'
import classes from '../items/items.module.css'
const Items = ({ image,text }) => {
  return (
    <>
      <div className={classes.main}>
        <img src={image} alt="image" srcset="" />
        <p>{text}</p>
      </div>
    </>
  )
}

export default Items