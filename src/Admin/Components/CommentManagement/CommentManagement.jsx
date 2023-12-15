import React from 'react'
import { CommentForm } from './CommentForm'
import { CommentTable } from './CommentTable'
import { Typography } from '@mui/material'

export const CommentManagement = () => {
  return (
    <div className='bg' style={{ paddingTop: '5rem' }}>
      <Typography className='text-center heading'>Quản lý bình luận</Typography>
      <Typography className='text-center title'>Xin chào, tôi là ....., chào mừng bạn đến với trang quản lý bình luận.</Typography>

      {/* <CommentForm /> */}
      <CommentTable />
    </div>
  )
}
