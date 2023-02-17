import React from 'react'
import classes from '../header/header.module.css'
import Logo from '../../../assets/images/mobile/logo.svg'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo" srcset="" />
                </div>
                <nav>
                    <NavLink>About</NavLink>
                    <NavLink>Careers</NavLink>
                    <NavLink>Events</NavLink>
                    <NavLink>Products</NavLink>
                    <NavLink>Supports</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Header