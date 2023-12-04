import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Container, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux';
const ChangePass = () => {
    const [formValue, setFormValue] = useState({
        password: '',


    })
    console.log('formValue: ', formValue);
    // state validate form
    const [formError, setFormError] = useState({
        email: '',
    })

    const dispatch = useDispatch()
    // const { userEdit } = useSelector((state) => state.admin)
    // validate
    const validate = (name, value) => {
        switch (name) {
            case "username":
                if (value.trim() === "") {
                    return "Vui lòng nhập thông tin";
                } else {
                    return "";
                }

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
        console.log('ev.target.value: ', ev.target.value);


        setFormValue({
            ...formValue,
            [name]: ev.target.value,
        })
    }

    const navigate = useNavigate()




    //*********************** */
    const CustomButton = styled(Button)({
        backgroundColor: '#1F2937',
        '&:hover': {
            backgroundColor: '#23424e',
        },
    })
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
                                    backgroundImage: "url(/images/ChangePassword-thumbnail.png)",
                                    backgroundRepeat: "no-repeat",
                                    // backgroundColor: (t) =>
                                    //     t.palette.mode === "light"
                                    //         ? t.palette.grey[50]
                                    //         : t.palette.grey[900],
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: '1rem',

                                }}

                            // onClick={navigate('/')}
                            />
                            <Grid
                                item
                                xs={12}
                                sm={8}
                                md={5}
                                component={Paper}
                                elevation={6}
                                square
                                sx={{
                                    // backgroundColor:'transparent',
                                    borderRadius: '1rem',
                                    // borderBottomRightRadius: '1rem',

                                }}
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
                                    Đổi mật khẩu
                                    </Typography>
                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={(event) => {
                                            event.preventDefault()
                                            const validationError = {}
                                            // Object.keys(formValue).forEach((name) => {
                                            //     // key : id | name | price | image | productType
                                            //     const error = validate(name, formValue[name])
                                            //     if (error && error.length > 0) {
                                            //         validationError[name] = error//thêm name vào obj validationError
                                            //     }
                                            // })
                                            // if (Object.keys(validationError).length > 0) {
                                            //     setFormError({ ...validationError });
                                            //     return;
                                            // }


                                            // dispatch(checkEmailToChangePass(formValue))
                                            setFormValue({
                                                email: '',
                                            })
                                            navigate('/userProfile')


                                        }}

                                        sx={{ mt: 1 }}
                                    >
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="oldPassword"
                                            label="Mật khẩu hiện tại"
                                            name="oldPassword"
                                            autoComplete="oldPassword"
                                            autoFocus
                                            onChange={
                                                handleFormValue('oldPassword')
                                            }
                                            onBlur={
                                                handleFormValue('oldPassword')
                                            }
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="newPassword"
                                            label="Mật khẩu mới"
                                            name="newPassword"
                                            autoComplete="newPassword"
                                            autoFocus
                                            onChange={
                                                handleFormValue('newPassword')
                                            }
                                            onBlur={
                                                handleFormValue('newPassword')
                                            }
                                        />


                                        <CustomButton
                                            className=''
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, }}
                                        >
                                            Đổi mật khẩu
                                        </CustomButton>
                                        {/* <Grid container >
                                            <Grid item xs>
                                                <Link to={'/forgotPass'} variant="body2" style={{ color: '#1F2937' }}>
                                                    <small>Quên mật khẩu?</small>
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link to={'/sign-up'} variant="body2" style={{ color: '#1F2937' }}>
                                                    <small>Chưa có tài khoản? Đăng ký</small>
                                                </Link>
                                            </Grid>
                                        </Grid> */}
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
                            // height: 100,
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

export default ChangePass