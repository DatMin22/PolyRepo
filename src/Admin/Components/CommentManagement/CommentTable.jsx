import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListComment } from '../../../store/Post/slice';

export const CommentTable = () => {
    const { commentList } = useSelector((state) => state.post)
    const disPatch = useDispatch()

    useEffect(
        () => {
            disPatch(getListComment())
        }, [])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'content', headerName: 'Nội dung', width: 350 },
        { field: 'user_id', headerName: 'Mã người dùng', width: 150 },
        { field: 'post_id', headerName: 'Mã bài viết', width: 150 },
        { field: 'commentstatus', headerName: 'Trạng thái', width: 150 },
        {
            field: 'action',
            headerName: 'Hành động',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,

        },
    ];
    return (

        <>
            <Container style={{ height: 400, width: '70%', margin: '0 auto' }}>
                <DataGrid
                className='table'
                    rows={commentList}
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

            <div className='p-4 sm:ml-64 d-none'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Content
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    CommentStatus
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    PostId
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    UserId
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // userList?.map((user) => {
                                //     return (
                                //         <tr key={user.id}
                                //             className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                //             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
                                //             <td className='px-6 py-4 text-xl'>{user.name}</td>
                                //             <td className='px-6 py-4 text-xl'>{user.email}</td>
                                //             <td className='px-6 py-4 text-xl'>{user.roleId}</td>
                                //             <td className='px-6 py-4 text-xl'>
                                //                 <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-3 py-2.5 text-center me-2 mb-2"
                                //                     onClick={() => {
                                //                         dispatch(adminActions.setUserEdit(user))
                                //                     }}><i className="fa-solid fa-marker"></i>Edit</button>
                                //                 <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-lg px-3 py-2.5 text-center me-2 mb-2"
                                //                     onClick={() => {
                                //                         dispatch(adminActions.deleteUser(user.id))
                                //                     }}><i className="fa-solid fa-trash"></i>Disable</button>
                                //             </td>

                                //         </tr>
                                //     )
                                // })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}
