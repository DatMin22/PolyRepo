import React from 'react'
import { RoleForm } from './RoleForm'
import { RoleTable } from './RoleTable'

export const RoleManagement = () => {
  return (
    <div className='bg-gray-800'>
      <h1 className=' text-3xl pt-20 pl-72 text-white'>Role Management</h1>

      <RoleForm />
      <RoleTable />
    </div>
  )
}
