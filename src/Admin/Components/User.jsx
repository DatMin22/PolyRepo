import React from 'react'
import { UsersForm } from './UsersForm'
import { UserTable } from './UserTable'
import { Box, Button, Modal, Typography } from '@mui/material'
import DemoDatagrid from './demoDatagrid'
export const User = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='bg' style={{ paddingTop: '5rem' }}>
      <Typography className='text-center heading'>Quản lý người dùng</Typography>
      <Typography className='text-center title'>Xin chào, tôi là ....., chào mừng bạn đến với trang quản lý người dùng.</Typography>
      {/* <UsersForm /> */}

      <DemoDatagrid />
      {/* <UserTable /> */}

    </div>
  )
}
