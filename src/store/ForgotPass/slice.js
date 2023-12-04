import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"


const initialState = {
    message: ''
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const checkEmailToChangePass = createAsyncThunk("checkEmailToChangePass", async (email) => {
    try {
        const response = await axios.post(
            `${baseURL}/password/reset`,
            email,
            // {
            //     headers: { 'content-type': 'application/json' }
            // }
        )
        console.log('response: ', response);
        // return response.data.statusCode
        // alert('Đăng nhập thành công.')
        // getUserByEmail(data.email)
        // console.log("response checkEmailToChangePass", response.data.statusCode)
        // return response.data.data
    } catch (error) {
        throw(error) 
        console.log("error", error);
    }
})

const forgotPassSlice = createSlice({
    name: 'forgotPass',
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


    },
    extraReducers(builder) {
        builder.addCase(checkEmailToChangePass.pending, (state) => {
            // alert('asfsdf ')
        })
        builder.addCase(checkEmailToChangePass.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);

            state.message = payload
            alert(payload)



        })
        builder.addCase(checkEmailToChangePass.rejected, (state) => {
            alert("lỗi");
        })


    }

})

export const { reducer: forgotPassReducer, actions: forgotPassActions } = forgotPassSlice