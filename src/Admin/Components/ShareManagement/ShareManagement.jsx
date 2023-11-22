import React from 'react'
import { ShareForm } from './ShareForm'
import { ShareTable } from './ShareTable'

export const ShareManagement = () => {
  return (
    <div className='bg-gray-800'>
      <h1 className=' text-3xl pt-20 pl-72 text-white'>Share Management</h1>

      <ShareForm />
      <ShareTable />
    </div>
  )
}
