import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminActions, getUsersList } from '../../store/Admin/slice'
import * as apiServices from '../../Services/apiServices'
import { useEffect } from 'react'
import * as yup from "yup"
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, FormControl, Grid, InputLabel, Modal, Select, Stack, TextField, Typography } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
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
        type: 'singleSelect',
        valueOptions: ['user', 'admin'],
        editable: true,
    },
    {
        field: 'action',
        headerName: 'Hành động',
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
    const schemaSignup = yup.object({
        username: yup
            .string()
            .required("Vui lòng nhập tài khoản")
            .min(10, "Tài khoản ít nhất 6 ký tự")
            .max(20, "Tài khoản không vượt quá 8 ký tự"),
        password: yup
            .string()
            .required("Vui lòng nhập mật khẩu")
        ,
        email: yup
            .string()
            .required('Vui lòng nhập email')
    })
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        // height:600,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { userList } = useSelector((state) => state.admin)
    console.log('userList: ', userList)
    const dispatch = useDispatch()
    const { handleSubmit, formState: { errors }, register, control, setValue, watch } = useForm({
        defaultValues: {
            username: '',
            password: '',
            email: '',
            role_id: 2
        }, resolver: yupResolver(schemaSignup),
        mode: "all",
    });


    // useQuery({ queryKey: ["list-movie-admin"]})
    const { mutate: handleAddUser, isPending } = useMutation({
        mutationFn: (payload) => apiServices.addUser(payload),
        onSuccess: () => {
            // call api get list
            // queryClient.invalidateQueries({ queryKey: ["list-movie"] });
        },
    });

    const onSubmit = (formValues) => {
        const formData = new FormData()
        formData.append("username", formValues.username)
        formData.append("password", formValues.password)
        formData.append("email", formValues.email)
        formData.append("role_id", formValues.role_id)
        handleAddUser(formData);
    };
    // Get all users
    useEffect(() => {
        dispatch(getUsersList())

    }
        , [])

    return (
        <>
            <div style={{ height: 400, width: '70%', margin: '0 auto' }}>
                <Button
                    id='btn'
                    onClick={handleOpen}
                    sx={{ padding: '.7rem', backgroundColor: '#fff', color: '#1f2937', alignItems: ' end' }}
                    variant='contained'>
                    <i class='bx bx-plus-circle '
                        style={{ fontSize: '1.7rem', paddingRight: '.2rem' }}></i>
                    Thêm người dùng
                </Button>
                <DataGrid
                    className='table'

                    rows={userList}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    // rowSelection={false}
                    checkboxSelection
                />
            </div>

            {/* FORM THÊM NGƯỜI DÙNG */}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ border: 'none', outline: 'none' }}
                >
                    <Box sx={style}>

                        <Typography component={'h1'} fontSize={'2rem'} textAlign={'center'} paddingBottom={'2rem'}>
                            Thêm người dùng
                        </Typography>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{
                                width: '100%',
                            }}>

                            <Stack direction={"column"} spacing={3} fullWidth>
                                <TextField
                                    label="Tên người dùng"
                                    fullWidth
                                    {...register("username")}
                                    error={Boolean(errors.username)}
                                    helperText={Boolean(errors.username) && errors.username.message}
                                />
                                <TextField label="Email"

                                    {...register("email")}
                                    error={Boolean(errors.email)}
                                    helperText={Boolean(errors.email) && errors.email.message}
                                />
                                <TextField label="Mật khẩu"
                                    type='password'
                                    {...register("password")}
                                    error={Boolean(errors.password)}
                                    helperText={Boolean(errors.password) && errors.password.message}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Vai trò</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="vaitro"
                                        {...register("role_id")}
                                    // error={Boolean(errors.category_id)}
                                    // helperText={Boolean(errors.category_id) && errors.category_id.message}
                                    >{
                                            // listCategory?.map((cate) => {
                                            //     return (
                                            //         <MenuItem key={cate.id} value={cate.id}>{cate.name}</MenuItem>
                                            //     )
                                            // })
                                        }

                                    </Select>
                                </FormControl>

                                <LoadingButton
                                    loading={isPending}
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                >
                                    ĐĂNG BÀI
                                </LoadingButton>
                            </Stack>
                        </form>
                    </Box>
                </Modal>
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
