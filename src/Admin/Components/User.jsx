import React from 'react'
import { UsersForm } from './UsersForm'
import { UserTable } from './UserTable'
import { Typography } from '@mui/material'
export const User = () => {
  return (
    <div className='' style={{ paddingTop: '5rem' }}>
      <Typography className=' '>Quản lý người dùng</Typography>
      <Typography>Xin chào, tôi là ....., chào mừng bạn đến với trang quản lý người dùng.</Typography>
      {/* <UsersForm /> */}
      <UserTable />
    </div>
  )
}
