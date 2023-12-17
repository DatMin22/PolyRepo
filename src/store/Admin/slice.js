import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"

const baseURL = 'http://localhost:8080'

const initialState = {
    userList: [],
    userEdit: undefined,

}
export const getUsersList = createAsyncThunk("user/getAll", async () => {
    try {
        const response = await axios.get(`${baseURL}/user/getAll`)
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const getUserById = createAsyncThunk("user/getUserById", async (id) => {
    try {
        const response = await axios.get(`${baseURL}/user/${id}`,
            // {
            //     params: {
            //         id: id,
            //     },
            // }
        )
        console.log("response", response)
        return response.data
    } catch (error) {
        console.log("error", error);
    }
})
export const updateUser = createAsyncThunk("user/update", async (id, data) => {
    try {
        // const response = await axios.put(`${baseURL}/user/update/${id}`,
        //     JSON.stringify(data),
        //     { headers: { 'content-type': 'application/json' } }
        // )
        // console.log("updateUser", response)
        const response = await fetch(`${baseURL}/user/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            // header là json
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log('response: ', response)

        return response.data
    } catch (error) {
        console.log('data: ', data)
        console.log("error", error)
    }
})

const AdminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {
        addUser(state, { payload }) {
            console.log('payload: ', payload)
            state.userList.push(payload)
            apiServices.post('/user/getAll',
                payload)
                .then((res) => {

                })

        },

        deleteUser: (state, { payload }) => {
            console.log('payload: ', payload);

            state.userList = state.userList.filter((value) => value.id !== payload)
            // const index = state.userList.indexOf(action.payload);
            // if (index !== -1) {
            //     state.userList.splice(index, 1);
            // }
        },
        setUserEdit: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.userEdit = payload

        },
        // lấy dữ liệu từ api gán vào cho userList
        getUsersList: (state) => {
            apiServices.get('/user/getAll')
                .then((response) => {
                    console.log('response: ', response.data.data);
                    // userList = response.data.data
                    // return userList
                    // state.userList = response.data.data
                    // dispatch(adminActions.getUsersList(response.data.data))
                }).catch((er) => {
                    console.log("err", er)
                })

        },
        // cập nhật sản phẩm
        updateuser: (state, { payload }) => {
            // Tim cái sản phẩm đang được chỉnh sửa
            const userIndex = state.userList.findIndex(
                (item) => item.id === payload.id
            );

            // khi ko tìm thấy sp dựa vào id thì userIndex=-1
            if (userIndex !== -1) {
                // CẬp nhật lại sản phẩm mới từ người dùng nhập vào
                console.log("người dùng được tìm thấy", userIndex)
                state.userList[userIndex] = payload
                state.userEdit = undefined
            }
        },

        login(state) {
            // state.userList.push(payload)
            apiServices.post('/signin',
                {
                    // username: 'demoUser',
                    email: "demoUser@gmail.com",
                    password: "12345678"
                }
            )
                .then((res) => {
                    console.log('res: ', res);

                })

        },
        register(state, { payload }) {
            apiServices.post(
                '/signup',
                payload
            )
                .then((resp) => {
                    console.log('res: ', resp.data);
                    alert('Đăng ký thành công.')

                })
                .catch((error) => {
                    console.log('error: ', error);

                })

        },

    },
    extraReducers(builder) {
        builder.addCase(getUsersList.fulfilled, (state, { payload }) => {
            // state.isLoading = false;
            console.log('payload: ', payload)
            state.userList = payload;
        })
        builder.addCase(getUserById.fulfilled, (state, { payload }) => {
            console.log('userEdit: ', payload)
            state.userEdit = payload;
        })
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            console.log('updateUser: ', payload)
        })
        builder.addCase(updateUser.rejected, (state) => {
            alert('lỗi rồi🤕🤕')
        })
    }
})

export const { reducer: adminReducer, actions: adminActions } = AdminSlice