import React from 'react'
import { User } from '../../Admin/Components/User'
import { Navigate, Outlet } from 'react-router-dom'
import { HeaderAdmin } from '../../Admin/Components/HeaderAdmin/HeaderAdmin'
import { SideBarAdmin } from '../../Admin/Components/SideBarAdmin/SideBarAdmin'
import { currentUser, isCurrentUser } from '../../modules/auththen/auththen'
import { PATH } from '../../constants/paths'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/Auth/slice'

const AdminLayout = () => {
    const dispatch = useDispatch()
    console.log('currentUser: ', currentUser)
    if (currentUser == null) {
        return <Navigate to={PATH.SIGNIN} />
    }
    if (currentUser && currentUser.roleId == 2) {
        dispatch(authActions.setIsLogin(true))
        return <Navigate to={PATH.HOME} />
    }
    if (currentUser && currentUser.roleId == 1) {
        dispatch(authActions.setIsLogin(true))
        return (
            <div>
                <HeaderAdmin />
                <SideBarAdmin />
                <Outlet />
            </div>
        )
    }
    // return 'ssss'
}

export default AdminLayout