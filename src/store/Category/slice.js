import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as apiServices from '../../Services/apiServices'
import axios from "axios"


const initialState = {
    listCategory: [],
    cateEdit: undefined
}

const baseURL = 'http://localhost:8080'
// dungf reduxthunk
export const getAllCategory = createAsyncThunk("getAllCategory", async () => {
    try {
        const response = await apiServices.get(
            '/cate/getAll',

        )
        console.log("response", response)
        return response.data.data
    } catch (error) {
        console.log("error", error);
    }
})
export const addCategory = createAsyncThunk("addCategory", async (cate) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/cate/add',
            cate
        )
        console.log("response", response)
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
        setCateEdit: (state, { payload }) => {
            state.cateEdit = payload
        }
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


        // *ADD
        builder.addCase(addCategory.pending, (state) => {
            // alert('sfsf')
        })
        builder.addCase(addCategory.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            state.listCategory.push(payload)


        })

    }

})

export const { reducer: categoryReducer, actions: categoryActions } = categorySlice