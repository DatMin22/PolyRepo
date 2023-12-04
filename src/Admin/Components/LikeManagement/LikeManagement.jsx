import React from 'react'
import { LikeForm } from './LikeForm'
import { LikeTable } from './LikeTable'
import { Typography } from '@mui/material'

export const LikeManagement = () => {
  return (
    <div className='' style={{paddingTop:'5rem'}}>
            <Typography component={'h1'} className=''>Like Management</Typography>

      {/* <LikeForm /> */}
      <LikeTable />
    </div>
  )
}
