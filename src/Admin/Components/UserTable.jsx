import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminActions, getUsersList } from '../../store/Admin/slice'
import * as apiServices from '../../Services/apiServices'
import { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
// import { getUsersList } from '../../store/Admin/slice'
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Tên người dùng', width: 200 },
    { field: 'email', headerName: 'email', width: 220 },
    {
        field: 'roleId',
        headerName: 'role',
        // type: 'number',
        width: 100,
    },
    {
        field: 'action',
        headerName: 'Hành động',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export const UserTable = () => {

    const { userList } = useSelector((state) => state.admin)
    console.log('userList: ', userList)
    const dispatch = useDispatch()
    // Get all users
    useEffect(() => {
        dispatch(getUsersList())

    }
        , [])

    return (
        <>
            <div style={{ height: 400, width: '50%', margin: '0 auto' }}>
                <DataGrid
                    rows={userList}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>

            {/* **************** */}
            <div className='p-4 sm:ml-64 d-none'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList?.map((user) => {
                                    return (
                                        <tr key={user.id}
                                            className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
                                            <td className='px-6 py-4 text-xl'>{user.name}</td>
                                            <td className='px-6 py-4 text-xl'>{user.email}</td>
                                            <td className='px-6 py-4 text-xl'>{user.roleId}</td>
                                            <td className='px-6 py-4 text-xl'>
                                                <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-3 py-2.5 text-center me-2 mb-2"
                                                    onClick={() => {
                                                        dispatch(adminActions.setUserEdit(user))
                                                    }}><i className="fa-solid fa-marker"></i>Edit</button>
                                                <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-lg px-3 py-2.5 text-center me-2 mb-2"
                                                    onClick={() => {
                                                        dispatch(adminActions.deleteUser(user.id))
                                                    }}><i className="fa-solid fa-trash"></i>Disable</button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}
