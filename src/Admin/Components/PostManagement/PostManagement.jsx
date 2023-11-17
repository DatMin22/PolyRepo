import React from 'react'
import { PostForm } from './PostForm'
import { PostTable } from './PostTable'

export const PostManagement = () => {
    return (
        <div className='p-4 sm:ml-64'>
            <PostForm />
            <PostTable />
        </div>
    )
}
