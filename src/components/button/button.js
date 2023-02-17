import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../button/button.module.css'
const Button = () => {
  return (
      <div className={classes.main}>
          <Link>
              <button>SEE ALL</button>
          </Link>
    </div>
  )
}

export default Button;