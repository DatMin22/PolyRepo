import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"


const initialState = {
    message: '',
    statusCode: ''
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const changePassword = createAsyncThunk("/user/changePassword", async (payload) => {
    try {
        const response = await axios.post(
            `${baseURL}/user/change-password`,
            payload,
            {
                headers: {
                    // 'content-type': 'application/json',
                    Authorization: `${localStorage.getItem('userToken')}`
                },
            }

        )
        console.log('response: ', response)
        // return response.data.statusCode
        // alert('Đăng nhập thành công.')
        // getUserByEmail(data.email)
        // console.log("response checkEmailToChangePass", response.data.statusCode)
        return response.data.statusCode
    } catch (error) {
        // console.log("error", error);
        throw new Error(error)
    }
})

const changePassSlice = createSlice({
    name: 'changePass',
    initialState,
    reducers: {







    },
    extraReducers(builder) {
        builder.addCase(changePassword.pending, (state) => {
            // alert('asfsdf ')
        })
        builder.addCase(changePassword.fulfilled, (state, { payload }) => {
            // console.log('payload: ', payload)

            state.statusCode = payload
            alert(payload)



        })
        builder.addCase(changePassword.rejected, (state) => {
            alert("lỗi");
        })


    }

})

export const { reducer: changePassReducer, actions: changePassActions } = changePassSlice