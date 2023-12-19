import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { PATH } from "../../constants/paths"


const initialState = {
    listShareByUser: null
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const shareAPost = createAsyncThunk("shareAPost", async (data) => {
    try {
        const response = await axios.post(
            `${baseURL}/share/add`,
            data,
            // { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
        )


        console.log("response share add", response)
        return response.data
    } catch (error) {
        throw new error

    }
})
export const getShareByUserId = createAsyncThunk("getShareByUserId", async (id) => {
    try {
        const response = await axios.get(
            `${baseURL}/share/user/${id}`,

        )
        console.log("response", response.data.data)
        return response.data.data
    } catch (error) {
        throw new error
    }
})
const shareSlice = createSlice({
    name: 'Share',
    initialState,
    reducers: {






    },
    extraReducers(builder) {
        builder.addCase(shareAPost.pending, (state) => {
        })
        builder.addCase(shareAPost.fulfilled, (state, { payload }) => {
            console.log('payload share: ', payload)






        })
        builder.addCase(shareAPost.rejected, (state) => {
            alert("lỗi");
        })
        builder.addCase(getShareByUserId.pending, (state) => {
        })
        builder.addCase(getShareByUserId.fulfilled, (state, { payload }) => {
            console.log('payload getShareByUserId: ', payload)
            state.listShareByUser = payload



        })

    }

})

export const { reducer: shareReducer, actions: shareActions } = shareSlice