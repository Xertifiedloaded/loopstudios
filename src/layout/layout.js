import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/ui/header/header'
import Footer from '../components/ui/footer/footer'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout