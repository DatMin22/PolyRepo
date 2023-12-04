import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListPost, postActions } from '../../../store/Post/slice'
import { adminActions } from '../../../store/Admin/slice'
import { DataGrid } from '@mui/x-data-grid'

export const PostTable = () => {
    const { postList } = useSelector((state) => state.post)
    console.log('postList: ', postList)
    const disPatch = useDispatch()
    useEffect(() => {
        disPatch(getListPost())
    }, [])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userId', headerName: 'Mã người dùng', width: 150 },
        { field: 'title', headerName: 'Tiêu đề', width: 200 },
        {
            field: 'description',
            headerName: 'Mô tả',
            width: 200,
        },
        {
            field: 'filename',
            headerName: 'Tên tệp',
            width: 200,
        },
        {
            field: 'countlike',
            headerName: 'lượt thích',
            width: 100,
        },
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
            <div style={{ width: '80%', margin: '0 auto' }}>
                <DataGrid
                    rows={postList}
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


            <div className='p-4 sm:ml-64 d-none'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Poststatus
                                </th>
                                <th scope="col" class="px-6 py-3 min-w-max">
                                    User ID
                                </th>
                                <th scope="col" class="px-6 py-3 min-w-max" >
                                    Category ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                postList?.map((post) => {
                                    return (
                                        <tr key={post.id}
                                            className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{post.id}</th>
                                            <td className='px-6 py-4 text-xl'>{post.title}</td>
                                            <td className='px-6 py-4 text-xl'>{post.description}</td>
                                            <td className='px-6 py-4 text-xl'>
                                                <img className='w-28 rounded-lg' src={"/images/" + post.filename} alt="" />
                                            </td>
                                            <td className='px-6 py-4 text-xl'>{post.postStatus}</td>
                                            <td className='px-6 py-4 text-xl'>{post.userId}</td>
                                            <td className='px-6 py-4 text-xl'>{post.categoryId}</td>
                                            <td className='px-6 py-4 text-xl'>
                                                <div className='flex'>
                                                    <button type="button"
                                                        class="text-white
                                                bg-gradient-to-br
                                                from-green-400
                                                to-blue-600
                                                hover:bg-gradient-to-bl
                                                focus:ring-4 
                                                focus:outline-none
                                                focus:ring-green-200
                                                dark:focus:ring-green-800
                                                        font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
                                                        onClick={() => {
                                                            disPatch(postActions.setPostEdit(post))
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
        </>

    )
}
