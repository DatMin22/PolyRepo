import React from 'react'
import { CommentForm } from './CommentForm'
import { CommentTable } from './CommentTable'

export const CommentManagement = () => {
  return (
    <div className='bg-gray-800'>
            <h1 className=' text-3xl pt-20 pl-72 text-white'>Comment Management</h1>

      <CommentForm />
      <CommentTable />
    </div>
  )
}
