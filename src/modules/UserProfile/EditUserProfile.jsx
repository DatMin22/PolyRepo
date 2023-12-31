import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { PATH } from '../../constants/paths'
import {
    Container,
    Grid,
    TextField,
    Button,
    FormControl,
    FormControlLabel,
    Box,
    // FormControlLabel,
} from "@mui/material";
import { Label } from '@mui/icons-material';
import * as apiServices from '../../Services/apiServices'
export const EditUserProfile = () => {
    // const { userIslogin } = useSelector((state) => state.auth)
    const [currentUser, setCurrentUser] = useState(() => {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

    })
    console.log('currentUser: ', currentUser);
    if (currentUser == null) {
        return <Navigate to={PATH.SIGNIN} />
    }
    const [name, setName] = useState(currentUser?.name);
    console.log('name: ', name);
    const [email, setEmail] = useState(currentUser?.email);
    const [roleId, setRoleId] = useState(currentUser?.roleId);
    const dispatch = useDispatch()
    // console.log('userIslogin: ', userIslogin)
    return (

        <Container className=" bg-d ark d-flex justify-content-center " sx={{ marginY: '10rem' }} >
            <Grid container spacing={2} bgcolor={'re d'} width={'50%'}>
                <Grid item xs={12}>
                    <TextField sx={{ backgroundColor: 'whi te' }} fullWidth
                        label="Tên người dùng"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth
                        label="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth
                        label="Vai trò" 
                        value={roleId == 1 ? 'Quản trị viên' : 'Người dùng'}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth color="primary" type='button'
                        onClick={() => {
                            apiServices.updateUser(currentUser.id, {
                                name: name,
                                roleId: currentUser.roleId,
                                email: email,

                            })
                            setCurrentUser({
                                id: currentUser.id,
                                name: name,
                                roleId: currentUser.roleId,
                                email: email,
                                resetToken: null
                            })
                            localStorage.setItem('currentUser', JSON.stringify({
                                id: currentUser.id,
                                name: name,
                                roleId: currentUser.roleId,
                                email: email,
                                resetToken: null
                            }))
                            // dispatch(updateUser(8, {
                            //     name: 'qdat',
                            //     roleId: 2,
                            //     email: 'datmin220503@gmail.com',

                            // }))
                        }} >
                        Chỉnh sửa
                    </Button>
                </Grid>

            </Grid>
            {/* <div className="bg-white max-w-3xl m-auto shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Thông tin của bạn
                        </h3>

                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Chi tiết thông tin của bạn
                        </p>
                    </div>
                    <div>
                        <img className='w-16 rounded-full' src="https://cliply.co/wp-content/uploads/2020/09/442008571_ARTIST_AVATAR_3D_400.png" alt="" />

                    </div>
                </div>

                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Tên người dùng
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <input type="text" id="" class="bg-gray-50  border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required
                                    value={name}

                                    onChange={(event) => setName(event.target.value)}

                                // onChange={}
                                />

                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Địa chỉ email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <input type="text" id=""
                                    class="bg-gray-50  border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required
                                    value={email}
                                />

                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Vai trò
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {roleId ? <>{roleId === 1 ? "Admin" : "User"}</> : <></>}

                            </dd>
                        </div>
                    </dl>
                </div>
            </div> */}
            {/* <div className="rounded-lg "> */}
            {/* <img className='w-9/12 h-full rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyJTIwMmR8ZW58MHx8MHx8fDA%3D" alt="" /> */}
            {/* </div> */}

        </Container>

    )
}
