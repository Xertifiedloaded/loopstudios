import React from 'react'
import Items from './items/items'
import classes from '../dataList/dataList.module.css'
import { ImageData } from '../../../constant'
import Button from '../../button/button'
const DataList = () => {
    return (
        <>
            <div className={classes.main}>
                {
                    ImageData.map((image, i) => (
                        <Items {...image} key={i} />
                    ))
                }
                <div className={classes.btn}>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default DataList