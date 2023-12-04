import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions, getAllCategory } from '../../../store/Category/slice'
import { Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

export const CategoryTable = ({ }) => {
    const { listCategory } = useSelector((state) => state.category)
    const disPatch = useDispatch()
    useEffect(() => {
        disPatch(getAllCategory())
    }, [])
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Chuyên ngành', width: 350 },
        { field: 'shorts', headerName: 'Rút gọn', width: 200 },
        {
            field: 'action',
            headerName: 'Hành động',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,

        },
    ];
    return (
        <>
            <Container style={{ height: 400, width: '100%', margin: '0 auto' }}>
                <DataGrid
                    rows={listCategory}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    
                />
            </Container>

            <div className="container d-none">
                <div className='p-4 sm:ml-64'>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Shorts
                                    </th>

                                    <th scope="col" class="px-6 py-3">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listCategory?.map((category) => {
                                        return (
                                            <tr key={category.id}
                                                className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{category.id}</th>
                                                <td className='px-6 py-4 text-xl'>{category.name}</td>
                                                <td className='px-6 py-4 text-xl'>{category.shorts}</td>
                                                <td className='px-6 py-4 text-xl'>
                                                    <div className='flex'>
                                                        <button type="button"
                                                            class="text-white"
                                                            onClick={() => {
                                                                disPatch(categoryActions.setCateEdit(category))
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-marker"></i>
                                                        </button>
                                                        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
                                                            onClick={() => {
                                                                // disPatch(adminActions.deleteUser(post.id))
                                                            }}
                                                        >
                                                            <i class="fa-solid fa-ban"></i>
                                                        </button>

                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
