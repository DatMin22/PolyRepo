import { useDispatch, useSelector } from 'react-redux'
import Auth from '../../../public/css/auth.module.css'
import * as apiServices from '../../Services/apiServices'
import { authActions, getUserByEmail, login } from '../../store/Auth/slice'
import { useState } from 'react'
import { useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import { getLikeByUserId } from '../../store/Like/slice'
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { PATH } from '../../constants/paths'
import { currentUser, isCurrentUser } from '../../modules/auththen/auththen'
export const Login = () => {
    const navigate = useNavigate()
    // // * lấy currentUser từ localstorage
    // const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null
    // console.log('currentUser: ', currentUser)


    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const { userLogin, isLogin, userIslogin, userToken } = useSelector((state) => state.auth)
    console.log('isLogin: ', isLogin);
    console.log('userToken: ', userToken?.length);
    // console.log('isLogin: ', isLogin)
    console.log('userIslogin: ', userIslogin)
    // console.log('currentUser: ', currentUser)
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',


    })
    if (currentUser !== null && isLogin == true) {

        return <Navigate to={PATH.HOME} />
    }
    // if (userToken?.length > 0 && isLogin == true) {
    //     dispatch(getUserByEmail(formValue.email))
    //     return <Navigate to={PATH.HOME} />
    // }

    // state validate form
    const [formError, setFormError] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()
    // validate
    const validate = (name, value) => {
        switch (name) {

            case "email":
                if (value.trim() === "") {
                    return "Vui lòng nhập thông tin";
                } else if (value.match(
                    new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'))) {
                    return "vui lòng nhập đúng định dạng email";
                } else {
                    return ""
                }


            case "password":
                if (value.trim() === "") {
                    return "Vui lòng nhập thông tin";
                } else {
                    return "";
                }




            default:
                return "";
        }
    };
    // currying function
    const handleFormValue = (name) => (ev) => {

        setFormError(prevState => ({ ...prevState, [name]: validate(name, ev.target.value) }))


        setFormValue({
            ...formValue,
            [name]: ev.target.value,
        })

        console.log('formValue: ', formValue)
    }
    useEffect(() => {
        // console.log("render")
        // console.log(userLogin)
        // if (isLogin) {
        //     dispatch(getUserByEmail('nguyenvana@gmail.com'))
        //     return
        // }
    }

    )







    // const handleSignin = (user) => {
    //     setCurrentUser(user)
    //     localStorage.setItem('currentUser', JSON.stringify(user))

    // }
    // if (isLogin == true) {
    //     setCurrentUser(formValue)
    //     localStorage.setItem('currentUser', JSON.stringify(formValue))
    // }
    // const currentUser = localStorage.getItem('currentUser')
    // console.log('currentUser: ', currentUser);
    // if (currentUser) {
    // userIslogin = currentUser
    // }

    const CustomButton = styled(Button)({
        backgroundColor: '#1F2937',
        '&:hover': {
            backgroundColor: '#23424e',
        },
    })
    const [dangNhap, setLogin] = useState(false)

    // const userToken = localStorage.getItem('userToken')
    if (dangNhap == true && isLogin == true) {
        dispatch(getUserByEmail(formValue.email))
        navigate('/')
    }

    return (
        <>

            <div style={{
                backgroundColor: "#1F2937",
                height: "100vh"
            }}>

                <Container component="main" maxWidth="lg"
                    sx={{
                        paddingTop: 8,
                        backgroundColor: '',
                        borderRadius: '1rem'
                    }}
                >
                    <Link to={'/'}>
                        <img src="/images/logoPolyRepo.png" alt="Logo PolyRepo " style={{ width: 100 }} />
                    </Link>
                    <Box
                        sx={{
                            paddingTop: 8,
                            backgroundColor: '#1F2937',
                            borderRadius: '1rem'
                        }}
                    >
                        <Grid container >

                            <CssBaseline />
                            <Grid
                                // component={Button}
                                item
                                xs={false}
                                sm={4}
                                md={7}
                                sx={{
                                    backgroundImage: "url(/images/Login-thumbnail.png)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: '1rem',

                                }}
                            />
                            <Grid
                                item
                                xs={12}
                                sm={8}
                                md={5}
                                component={Paper}
                                elevation={6}
                                square
                                sx={{ borderRadius: '1rem' }}
                            >
                                <Box
                                    sx={{
                                        my: 8,
                                        mx: 4,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >

                                    <Typography component="h1" variant="h5">
                                        Đăng nhập
                                    </Typography>
                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={(event) => {
                                            event.preventDefault()
                                            const validationError = {}
                                            Object.keys(formValue).forEach((name) => {
                                                // key : id | name | price | image | productType
                                                const error = validate(name, formValue[name])
                                                if (error && error.length > 0) {
                                                    validationError[name] = error//thêm name vào obj validationError
                                                }
                                            })
                                            if (Object.keys(validationError).length > 0) {
                                                setFormError({ ...validationError });
                                                return;
                                            }


                                            dispatch(login(formValue))
                                            // console.log(isLogin)
                                            // handleLogin()
                                            setLogin(true)
                                            // console.log('userToken: ', userToken)
                                            // navigate(PATH.HOME)



                                        }}

                                        sx={{ mt: 1 }}
                                    >
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            onChange={
                                                handleFormValue('email')
                                            }
                                            onBlur={
                                                handleFormValue('email')
                                            }
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Mật khẩu"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={
                                                handleFormValue('password')
                                            }
                                            onBlur={
                                                handleFormValue('password')
                                            }
                                        />
                                        {/* <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    /> */}
                                        <CustomButton
                                            className=''
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, }}
                                        >
                                            Đăng nhập
                                        </CustomButton>
                                        <Grid container >
                                            <Grid item xs>
                                                <Link to={PATH.CONFIRM_EMAIL} variant="body2" style={{ color: '#1F2937' }}>
                                                    <small>Quên mật khẩu?</small>
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link to={PATH.SIGNUP} variant="body2" style={{ color: '#1F2937' }}>
                                                    <small>Chưa có tài khoản? Đăng ký</small>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <div style={{ overflow: 'hidden' }}>
                    <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"
                        style={{
                            fill: '#ffffff',
                            width: '100%',
                            maxHeight: 200,
                            transform: 'rotate(180deg) scaleX(-1)',
                        }}>
                        <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" />
                        <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" opacity=".5" />
                        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
                    </svg>
                </div>
            </div>
        </>
    )
}
