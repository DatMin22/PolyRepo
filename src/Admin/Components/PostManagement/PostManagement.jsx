import React from 'react'
import { PostForm } from './PostForm'
import { PostTable } from './PostTable'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from '@mui/material'

export const PostManagement = () => {

   


    return (
        <div className='' style={{paddingTop:'5rem'}}>
            <Typography textAlign={'center'}>Quản lý bài viết</Typography>

            {/* <PostForm /> */}
            <PostTable />
        </div>
    )
}
