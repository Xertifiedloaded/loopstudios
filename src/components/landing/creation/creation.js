import React from 'react'
import Button from '../../button/button'
import classes from '../creation/creation.module.css'
const Creation = () => {
    return (
        <>
            <div className={classes.main}>
                <p>our creations</p>
                <div className={classes.btn}>
                    <Button />
            </div>
            </div>
        </>
    )
}

export default Creation