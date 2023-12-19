import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apiServices from '../../Services/apiServices'
import axios from "axios";
const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const getAllLike = createAsyncThunk("getAllLike", async () => {
    try {
        const response = await axios.get(
            'http://localhost:8080/like/getAll',
        )
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const likePost = createAsyncThunk("likePost", async (postLike) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/like/add',
            postLike
        )
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const getLikeByPostId = createAsyncThunk("getLikeByPostId", async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/like/post/${id}`,
        )
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const getLikeByUserId = createAsyncThunk("getLikeByUserId", async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/like/user/${id}`,
        )
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const deleteLikeById = createAsyncThunk("deleteLikeById", async (id) => {
    try {
        const response = await apiServices.remove(
            `http://localhost:8080/like/delete/${id}`,
        )
        console.log("response delete like: ", response)
        return id
    } catch (error) {
        // throw (error)
        console.log("error", error);
    }
})
const likeSlice = createSlice({
    name: 'Like',
    initialState: {
        likePostNew: {},
        isLiked: false,
        likeByPostId: '',
        likeByUserId: '',
        listLike: []
    },
    reducers: {
        likePost: (state, action) => {
            state[action.payload] = true;
        },
        unlikePost: (state, action) => {
            delete state[action.payload];
        }
    },
    extraReducers(builder) {
        builder.addCase(likePost.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            state.isLiked = true;
            state.listLike.push(payload)
            state.likePostNew = payload
        })
        builder.addCase(getLikeByPostId.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            // state.isLiked = true;
            state.likeByPostId = payload

        })
        builder.addCase(getAllLike.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            // state.isLiked = true;
            state.listLike = payload

        })
        builder.addCase(getLikeByUserId.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            // state.isLiked = true;
            state.likeByUserId = payload

        })
        builder.addCase(deleteLikeById.fulfilled, (state, { payload }) => {
            console.log('deleteLikeById: ', payload);
            // state.isLiked = true;
            state.listLike = state.listLike.filter((like) => {
                return like.id !== payload
            })

        })

    }
})

export const { reducer: likeReducer, actions: likeActions } = likeSlice
