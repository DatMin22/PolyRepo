import React from 'react'
import { CommentForm } from './CommentForm'
import { CommentTable } from './CommentTable'

export const CommentManagement = () => {
  return (
    <div className='' style={{paddingTop:'5rem'}}>
            <h1 className=' '>Comment Management</h1>

      {/* <CommentForm /> */}
      <CommentTable />
    </div>
  )
}
