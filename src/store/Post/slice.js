import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import * as apiServices from '../../Services/apiServices'

const initialState = {
    isLoading: false,
    postList: [],
    commentList: [],
    commentListByPostID: [],
    fileUpload: '',
    postEdit: undefined,
    listGetPostById: {},
    listPostByUserId: []
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const getListPost = createAsyncThunk("posts/getAll", async () => {
    try {
        const response = await apiServices.get(`/posts/getAll`)
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const addPost = createAsyncThunk("posts/add", async (formValue) => {
    try {
        const response = await axios.post(
            `${baseURL}/posts/add`,
            formValue,
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response.data.data
        // console.log("response", response)
    } catch (error) {
        console.log("error", error);
    }
})
export const getPostById = createAsyncThunk("getPostById", async (id) => {
    try {
        const response = await axios.get(
            `${baseURL}/posts/${id}`,
            // { headers: { 'Content-Type': 'application/json' } }

        )
        console.log('response getPostById: ', response);
        return response.data.data
        // console.log("response", response)
    } catch (error) {
        console.log("error", error);
    }
})
export const getPostByUserId = createAsyncThunk("getPostByUserId", async (id) => {
    try {
        const response = await axios.get(
            `${baseURL}/posts/user/${id}`,
            // { headers: { 'Content-Type': 'application/json' } }

        )
        console.log('response getPostByUserId: ', response);
        return response.data.data
        // console.log("response", response)
    } catch (error) {
        console.log("error", error);
    }
})
export const upLoadFile = createAsyncThunk("uploadFile", async (file) => {
    try {
        const response = await axios.post(
            `${baseURL}/uploadfile`,
            file,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        return file.originalFileName
        console.log("response", response)
    } catch (error) {
        console.log("error", error);
    }
})
export const getListComment = createAsyncThunk("comment/getAll", async () => {
    try {
        const response = await apiServices.get(`/comment/getAll`)
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const addComment = createAsyncThunk("addComment", async (comment) => {
    try {
        const response = await axios.post(
            `${baseURL}/comment/add`,
            comment,
            { headers: { 'Content-Type': 'application/json' } }

        )
        console.log("response", response.data.data)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const getCommentByPostID = createAsyncThunk("getCommentByPostID", async (id) => {
    try {
        const response = await axios.get(
            `${baseURL}/comment/post/${id}`,
            { headers: { 'Content-Type': 'application/json' } }

        )
        console.log("response", response.data.data)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPostList: (state, { payload }) => {
            state.postList = payload
        },
        setLoading: (state, { payload }) => {
            state.isLoading = payload
        },
        setPostEdit: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.postEdit = payload

        },


    },
    extraReducers(builder) {
        builder.addCase(getListPost.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getListPost.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            console.log('payload: ', payload);
            state.postList = payload;
        })
        builder.addCase(addPost.pending, (state) => {
            alert('dduocjw rooif nef')
        })
        builder.addCase(addPost.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.postList.push(payload)
        })
        builder.addCase(addPost.rejected, (state) => {
            alert('dduocjw rooif nef')
            state.isLoading = false

        })
        builder.addCase(upLoadFile.pending, (state) => {
            state.isLoading = true

        })
        builder.addCase(upLoadFile.fulfilled, (state, { payload }) => {
            state.fileUpload = payload
            state.isLoading = false


        })

        // *COMMENT
        builder.addCase(getListComment.fulfilled, (state, { payload }) => {
            state.commentList = payload


        })
        builder.addCase(addComment.pending, (state) => {
            // state.comment = payload
            // state.isLoading = false


        })
        builder.addCase(addComment.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            // console.log('add comment thành công')
            // state.commentListByPostIID.push(payload)
            // state.isLoading = false


        })
        builder.addCase(addComment.rejected, (state) => {
            console.log(Error)
            // state.comment = payload
            // state.isLoading = false


        })

        //* getCommentByPostID
        builder.addCase(getCommentByPostID.fulfilled, (state, { payload }) => {
            // console.log('payload: ', payload);
            state.commentListByPostID = payload


        })

        // *getPostById
        builder.addCase(getPostById.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            state.listGetPostById = payload


        })
        // *listPostByUserId
        builder.addCase(getPostByUserId.fulfilled, (state, { payload }) => {
            console.log('payload listPostByUserId: ', payload)
            state.listPostByUserId = payload


        })
    }
})

export const { reducer: postReducer, actions: postActions } = postSlice