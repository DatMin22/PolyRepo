import React from 'react'
import { PostList } from '../../Post/PostList'
import { Post } from '../../Post/Post'
import { Carousel } from '../../Component/Carousel/Carousel'

export const HomePage = () => {
    return (

        <div>
            <Carousel/>
            <Post/>
        </div>

    )
}
