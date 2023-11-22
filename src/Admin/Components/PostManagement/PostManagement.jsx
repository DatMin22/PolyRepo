import React from 'react'
import { PostForm } from './PostForm'
import { PostTable } from './PostTable'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const PostManagement = () => {

   


    return (
        <div className='bg-gray-800'>
            <h1 className=' text-3xl pt-20 pl-72 text-white'>Post Management</h1>

            <PostForm />
            <PostTable />
        </div>
    )
}
