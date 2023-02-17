import React from 'react'
import classes from '../leader/leader.module.css'
import Lens from '../../../assets/images/mobile/image-interactive.jpg'
const Leader = () => {
    return (
        <div className={classes.main}>
            <div className={classes.img}>
                <img src={Lens} alt="" srcset="" />
            </div>
            <div className={classes.text}>
                <div className={classes.content}>
                    <h1>the leader in interactive vr</h1>
                    <p>Founded in 2011, Loopstudio has been producing world-class virtual reality projects for some of the best companies around the globe. our award-winning creations have transformed  businesses through digital experiences that binds to there brand</p>
                </div>
            </div>
        </div>
    )
}

export default Leader