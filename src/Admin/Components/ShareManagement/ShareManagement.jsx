import React from 'react'
import { ShareForm } from './ShareForm'
import { ShareTable } from './ShareTable'
import { Typography } from '@mui/material'

export const ShareManagement = () => {
  return (
    <div className='bg' style={{ paddingTop: '5rem' }}>
      <Typography className='text-center heading'>Quản lý chia sẻ</Typography>
      <Typography className='text-center title'>Xin chào, tôi là ....., chào mừng bạn đến với trang quản lý chia sẻ.</Typography>


      {/* <ShareForm /> */}
      <ShareTable />
    </div>
  )
}
