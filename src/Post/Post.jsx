import React, { useEffect } from 'react'
import { PostForm } from './PostForm'
import { PostList } from './PostList'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Lottie from 'react-lottie'
import loading from '../Lotties/loading.json'
import { getListPost } from '../store/Post/slice'
import { getUserByEmail } from '../store/Auth/slice'
import { getAllCategory } from '../store/Category/slice'



export const Post = () => {
  // * get data from store redux use useSelector
  const { isLoading } = useSelector(state => state.post)
  const { userLogin } = useSelector(state => state.auth)

  const disPatch = useDispatch()

  // *Loading
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  useEffect(() => {
    disPatch(getListPost())

  }, [])

  return (
    <div className='container-fluid'>
      {isLoading ? (
        <Lottie options={defaultOptions} width={200} height={200} />
      ) : (
        <>
          <PostList />
        </>
      )}
    </div>
  )
}
