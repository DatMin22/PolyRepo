import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../../Component/Header/Header'
import { Footer } from '../../Component/Footer/Footer'
import { PostList } from '../../Post/PostList'
import { Carousel } from '../../Component/Carousel/Carousel'
import { PATH } from '../../constants/paths'
import { currentUser } from '../../modules/auththen/auththen'
import { useSelector } from 'react-redux'
const UserLayout = () => {
    // const { userLogin, isLogin, userIslogin } = useSelector((state) => state.auth)
    // console.log('userIslogin: ', userIslogin)
    // if (currentUser !== null || isLogin == true) {
    //     return <Navigate to={PATH.HOME} />
    // }
    return (
        <div>
            <Header />
            {/* <Carousel /> */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout