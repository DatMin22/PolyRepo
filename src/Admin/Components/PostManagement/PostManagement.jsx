import React from 'react'
import { PostForm } from './PostForm'
import { PostTable } from './PostTable'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from '@mui/material'

export const PostManagement = () => {




    return (
        <div className='bg' style={{ paddingTop: '5rem' }}>
            <Typography className='text-center heading'>Quản lý bài viết</Typography>
            <Typography className='text-center title'>Xin chào, tôi là ....., chào mừng bạn đến với trang quản lý bài viết.</Typography>
            {/* <PostForm /> */}
            <PostTable />
        </div>
    )
}
