import React, { useState } from 'react'
import classes from '../header/header.module.css'
import Logo from '../../../assets/images/mobile/logo.svg'
import { NavLink } from 'react-router-dom'
import HamburgerOpen from '../../../assets/images/desktop/icon-hamburger.svg'
import HamburgerClose  from '../../../assets/images/desktop/icon-close.svg'
const Header = () => {
    const [isMobile, setIsMobile] = useState(false)

    return (
        <>
            {/* mobile hamburger */}
            <div className={classes.main}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo" srcset="" />
                </div>
                <nav>
                    <div className={classes.mobileIcon} onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <img src={HamburgerClose} /> : <img src={HamburgerOpen} />}
                    </div>
                    <ul className={`${isMobile ? classes.open : classes.close}`} onClick={()=>setIsMobile(isMobile)}>
                        <NavLink>About</NavLink>
                        <NavLink>Careers</NavLink>
                        <NavLink>Events</NavLink>
                        <NavLink>Products</NavLink>
                        <NavLink>Supports</NavLink>
                    </ul>
                </nav>
               
            </div>
        </>
    )
}

export default Header