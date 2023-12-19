import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"


const initialState = {
    message: '',
    confirmCode: null,
    data: undefined
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const checkEmailToChangePass = createAsyncThunk("checkEmailToChangePass", async (email) => {
    try {
        const response = await axios.post(
            `${baseURL}/password/reset`,
            email,
            {
                headers: {
                    'content-type': 'application/json',

                },


            },

        )
        console.log('response: ', response);

        return response.data.data
    } catch (error) {
        console.log("error", error);
        throw (error)
    }
})
export const passwordChange = createAsyncThunk("passwordChange", async (payload) => {
    try {
        const response = await axios.post(
            `${baseURL}/password/change`,
            payload,
            {
                headers: {
                    'content-type': 'application/json',

                },


            },

        )
        console.log('response: ', response);

        return response
    } catch (error) {
        console.log("error", error);
        throw (error)
    }
})

const forgotPassSlice = createSlice({
    name: 'forgotPass',
    initialState,
    reducers: {







    },
    extraReducers(builder) {
        builder.addCase(checkEmailToChangePass.pending, (state) => {
            // alert('asfsdf ')
        })
        builder.addCase(checkEmailToChangePass.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);

            state.confirmCode = payload.token
            alert(payload)

        })
        builder.addCase(checkEmailToChangePass.rejected, (state) => {
            alert("lỗi");
            return
        })
        builder.addCase(passwordChange.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            state.data = payload

        })
        builder.addCase(passwordChange.rejected, (state) => {
            alert("lỗi");
            return
        })


    }

})

export const { reducer: forgotPassReducer, actions: forgotPassActions } = forgotPassSlice