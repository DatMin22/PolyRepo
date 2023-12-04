import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../Component/Header/Header'
import { Footer } from '../../Component/Footer/Footer'
import { PostList } from '../../Post/PostList'
import { Carousel } from '../../Component/Carousel/Carousel'
const UserLayout = () => {
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