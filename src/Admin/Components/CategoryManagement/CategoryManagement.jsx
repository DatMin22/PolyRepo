import React from 'react'
import { CategoryForm } from './CategoryForm'
import { CategoryTable } from './CategoryTable'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCategory } from '../../../store/Category/slice'
import { Typography } from '@mui/material'

export const CategoryManagement = () => {
    const { listCategory } = useSelector((state) => state.category)

    const disPatch = useDispatch()
    useEffect(() => {
        disPatch(getAllCategory())
    }, [])
    return (
        <div className='bg' style={{ paddingTop: '5rem' }}>
            <Typography className='text-center heading'>Quản lý ngành học</Typography>
            <Typography className='text-center title'>Xin chào, tôi là ....., chào mừng bạn đến với trang quản lý ngành học.</Typography>

            {/* <CategoryForm /> */}
            <CategoryTable listCategory={listCategory} />
        </div>
    )
}
