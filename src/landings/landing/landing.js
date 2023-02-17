import React from 'react'
import Creation from '../../components/landing/creation/creation'
import DataList from '../../components/landing/dataList/dataList'
import Hero from '../../components/landing/hero/hero'
import Leader from '../../components/landing/leader/leader'

const Landing = () => {
    return (
        <>
            <Hero />
            <Leader />
            <Creation />
            <DataList/>
        </>
    )
}

export default Landing