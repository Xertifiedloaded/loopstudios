import React from 'react'
import classes from '../footer/footer.module.css'
import Logo from '../../../assets/images/mobile/logo.svg'

import { Link } from 'react-router-dom'
import SocialIcons from '../../socialIcon/socialIcons'
const Footer = () => {
    return (
        <>
            <div className={classes.footer}>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="" srcset="" />
                    </div>
                    <div className={classes.social}>
                        <SocialIcons />
                    </div>
                </div>
                <div className={classes.link}>
                    <nav>
                        <Link>About</Link>
                        <Link>Careers</Link>
                        <Link>Events</Link>
                        <Link>Products</Link>
                        <Link>Supports</Link>
                    </nav>
                    <div className={classes.copyright}>
                        <small>Ⓒ2023 Loopstudios. All Right reserved</small>
                    </div>
                    
                </div>
            
               
            </div>
        </>
    )
}

export default Footer