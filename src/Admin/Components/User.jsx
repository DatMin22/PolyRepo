import React from 'react'
import { UsersForm } from './UsersForm'
import { UserTable } from './UserTable'
export const User = () => {
  return (
    <div className='bg-gray-800'>
      <h1 className=' text-3xl pt-20 pl-72 text-white'>User Management</h1>

      <UsersForm />
      <UserTable />
    </div>
  )
}
