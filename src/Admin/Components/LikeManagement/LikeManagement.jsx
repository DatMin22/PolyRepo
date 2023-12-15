import React from 'react'
import { LikeForm } from './LikeForm'
import { LikeTable } from './LikeTable'
import { Typography } from '@mui/material'

export const LikeManagement = () => {
  return (
    <div className='bg' style={{ paddingTop: '5rem' }}>
      <Typography className='text-center heading'>Quản lý lượt thích</Typography>
      <Typography className='text-center title'>Xin chào, tôi là ....., chào mừng bạn đến với trang quản lý lượt thích.</Typography>

      {/* <LikeForm /> */}
      <LikeTable />
    </div>
  )
}
