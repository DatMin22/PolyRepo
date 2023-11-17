import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"


const initialState = {
    listCategory: []
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const getAllCategory = createAsyncThunk("getAllCategory", async () => {
    try {
        const response = await apiServices.get(
            `${baseURL}/cate/getAll`,

        )
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const getUserByEmail = createAsyncThunk("getUserByEmail", async (email) => {
    try {
        const response = await axios.get(
            `${baseURL}/user/email/${email}`,

            { 'content-type': 'application/x-www-form-urlencoded' }
        )
        // alert('getUserByEmail thành công.')
        // console.log("response", response.data.data)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {
        getAll: (state) => {
            apiServices.post(
                '/cate/getAll',

            )
                .then((res) => {
                    console.log('res category: ', res.data.data);

                    // state.isLogin = true

                })

                .catch((error) => {
                    console.log('error: ', error);
                    alert("Đã có lỗi xảy ra.")

                })
        },
    },
    extraReducers(builder) {
        builder.addCase(getAllCategory.pending, (state) => {
            // alert('sfsf')
        })
        builder.addCase(getAllCategory.fulfilled, (state, { payload }) => {
            state.listCategory = payload
            console.log('state.listCategory: ', state.listCategory);


        })
        builder.addCase(getAllCategory.rejected, (state) => {
            // alert("lỗi");
        })


    }

})

export const { reducer: categoryReducer, actions: categoryActions } = categorySlice