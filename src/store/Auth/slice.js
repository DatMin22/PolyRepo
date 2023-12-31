import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { PATH } from "../../constants/paths"


const initialState = {
    isLogin: false,
    userLogin: '',
    userIslogin: '',
    userToken: null
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const login = createAsyncThunk("login", async (data) => {
    try {
        const response = await axios.post(
            `${baseURL}/signin`,
            data,
            { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
        )
        // if (response.status == 200) {
        //     // localStorage.setItem('userToken', response.data.data)
        //     //     // <Navigate to="/" replace={true} />
        //     //     alert('dn thanh cong')
        // }

        console.log("response login", response)
        return response.data.data
    } catch (error) {
        throw new error

    }
})
export const getUserByEmail = createAsyncThunk("getUserByEmail", async (email) => {
    try {
        const response = await axios.get(
            `${baseURL}/user/email/${email}`,

            { 'content-type': 'application/x-www-form-urlencoded' }
        )
        // alert('getUserByEmail thành công.')
        console.log("response", response.data.data)
        return response.data.data
    } catch (error) {
        // throw new error
    }
})
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {




        login(state, { payload }) {
            apiServices.post(
                '/signin',
                payload
            )
                .then((res) => {
                    console.log('res: ', res.data.data);

                    alert('Đăng nhập thành công.')
                    // state.isLogin = true

                })

                .catch((error) => {
                    console.log('error: ', error);
                    alert("Đã có lỗi xảy ra. Đăng nhập thất bại")

                })
        },
        register(state, { payload }) {
            apiServices.post(
                '/signup',
                payload
            )
                .then((resp) => {
                    console.log('res: ', resp.data)


                })
                .catch((error) => {
                    console.log('error: ', error);
                    alert("Đã có lỗi xảy ra. Đăng ký thất bại")

                })

        },
        logout(state) {
            state.isLogin = false
            state.userIslogin = ''
            state.userLogin = ''

        },
        reload(state) {
            state.isLogin = true


        },
        setIsLogin(state, { payload }) {
            state.isLogin = payload


        },

    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
        })
        builder.addCase(login.fulfilled, (state, { payload }) => {
            if (payload !== null && payload !== undefined) {
                localStorage.setItem('userToken', payload)
                state.isLogin = true

            }




        })
        builder.addCase(login.rejected, (state) => {
            alert("lỗi");
        })
        builder.addCase(getUserByEmail.pending, (state) => {
        })
        builder.addCase(getUserByEmail.fulfilled, (state, { payload }) => {
            let object = Object.assign({}, ...payload)
            state.isLogin = true
            state.userIslogin = object

            console.log('state.userLogin: ', state.userLogin);

        })

    }

})

export const { reducer: authReducer, actions: authActions } = authSlice