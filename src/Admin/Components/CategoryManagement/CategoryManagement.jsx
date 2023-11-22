import React from 'react'
import { CategoryForm } from './CategoryForm'
import { CategoryTable } from './CategoryTable'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCategory } from '../../../store/Category/slice'

export const CategoryManagement = () => {
    const { listCategory } = useSelector((state) => state.category)

    const disPatch = useDispatch()
    useEffect(() => {
        disPatch(getAllCategory())
    }, [])
    return (
        <div className='bg-gray-800'>
            <h1 className=' text-3xl pt-20 pl-72 text-white'>Category Management</h1>

            <CategoryForm />
            <CategoryTable listCategory={listCategory} />
        </div>
    )
}
