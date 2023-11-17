import React from 'react'
import { User } from '../../Admin/Components/User'
import { Outlet } from 'react-router-dom'
import { HeaderAdmin } from '../../Admin/Components/HeaderAdmin/HeaderAdmin'
import { SideBarAdmin } from '../../Admin/Components/SideBarAdmin/SideBarAdmin'

const AdminLayout = () => {
    return (
        <div>
            <HeaderAdmin />
            <SideBarAdmin />
            <Outlet />
        </div>
    )
}

export default AdminLayout