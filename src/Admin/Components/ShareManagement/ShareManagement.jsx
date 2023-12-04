import React from 'react'
import { ShareForm } from './ShareForm'
import { ShareTable } from './ShareTable'

export const ShareManagement = () => {
  return (
    <div className=''style={{paddingTop:'5rem'}}>
      <h1 className=' '>Share Management</h1>

      {/* <ShareForm /> */}
      <ShareTable />
    </div>
  )
}
