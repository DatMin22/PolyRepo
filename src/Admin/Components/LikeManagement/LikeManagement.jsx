import React from 'react'
import { LikeForm } from './LikeForm'
import { LikeTable } from './LikeTable'

export const LikeManagement = () => {
  return (
    <div className='bg-gray-800' >
            <h1 className=' text-3xl pt-20 pl-72 text-white'>Like Management</h1>

      <LikeForm />
      <LikeTable />
    </div>
  )
}
