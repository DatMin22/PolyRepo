import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
} from '@mui/x-data-grid-generator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, getUsersList } from '../../store/Admin/slice';
import { FormControl, InputLabel, Modal, Select, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { addUser, updateUser } from '../../Services/apiServices';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';
import { useState } from 'react';
const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
    return randomArrayItem(roles);
};

const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        age: 25,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 36,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 19,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 28,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        age: 23,
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
];

function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = randomId()
        setRows((oldRows) => [...oldRows, { id, name: '', email: '', roleId: 2 }])
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }))
    }


    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Thêm người dùng
            </Button>
        </GridToolbarContainer>
    );
}

export default function DemoDatagrid() {
    const { userList, userEdit } = useSelector((state) => state.admin)
    console.log('userEdit: ', userEdit)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const schemaSignup = yup.object({
        username: yup
            .string()
            .required("Vui lòng nhập tài khoản")
            .min(6, "Tài khoản ít nhất 6 ký tự")
            .max(8, "Tài khoản không vượt quá 8 ký tự"),
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
        mutationFn: (payload) => addUser(payload),
        onSuccess: (data) => {
            // console.log('data: ', data)
            // call api get list
            // dispatch(getUsersList())

            // queryClient.invalidateQueries({ queryKey: ["list-movie"] });
        },
    })

    const onSubmit = (formValues) => {
        const formData = new FormData()
        formData.append("username", formValues.username)
        formData.append("password", formValues.password)
        formData.append("email", formValues.email)
        formData.append("role_id", formValues.role_id)
        handleAddUser(formData)

    };
    // Get all users
    useEffect(() => {
        dispatch(getUsersList())

    }
        , [])
    const navigate = useNavigate()
    const [rows, setRows] = useState(userList);
    console.log('rows: ', rows)
    const [rowModesModel, setRowModesModel] = React.useState({});

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true
        }
    };
    const handleEditClick = (id) => () => {


        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
        })
        dispatch(getUsersList())
    }

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id))
    }

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        // console.log('editedRow: ', editedRow)
        // if (editedRow.isNew) {
        setRows(rows.filter((row) => row.id !== id));
        dispatch(getUsersList())

        // }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow };
        console.log('updatedRow: ', updatedRow)
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)))
        dispatch(updateUser(updatedRow.id,
            {
                name: updatedRow.name,
                roleId: updatedRow.roleId,
                email: updatedRow.email
            }))
        console.log('rows: ', rows)

        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        console.log('newRowModesModel: ', newRowModesModel);
        setRowModesModel(newRowModesModel);
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 100, editable: true },
        {
            field: 'name',
            headerName: 'Tên người dùng',
            type: 'string',
            width: 220,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 300,
            editable: true,
        },
        {
            field: 'roleId',
            headerName: 'Vai trò',
            width: 220,
            description: '1 là Admin, 2 là User',
            editable: true,
            type: 'singleSelect',
            // valueOptions: ['Người dùng', 'Quản trị viên'],
            valueOptions: [1, 2],
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Hành động',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Box

            style={{ width: '70%', margin: '0 auto' }}
        >
            <Button
                id='btn'
                onClick={handleOpen}
                sx={{ padding: '.7rem', backgroundColor: '#fff', color: '#1f2937', alignItems: ' end' }}
                variant='contained'>
                <i class='bx bx-plus-circle '
                    style={{ fontSize: '1.7rem', paddingRight: '.2rem' }}></i>
                Thêm người dùng
            </Button>
            <Button
                id='btn'
                className='btnupdate'
                onClick={() => { dispatch(getUsersList()) }}
                sx={{ padding: '.7rem', backgroundColor: '#fff', color: '#1f2937', alignItems: ' end' }}
                variant='contained'>
                <i class='bx bx-refresh'
                    style={{ fontSize: '1.7rem', paddingRight: '.2rem' }}></i>
            </Button>
            <DataGrid
                className='table'

                rows={userList}
                columns={columns}
                editMode="row"
                // onCellEditStop={rows}
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                // slots={{
                //     toolbar: EditToolbar,
                // }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />

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
                                <TextField component=''
                                    id='username'
                                    label="Tên người dùng"
                                    fullWidth
                                    value={userEdit?.name}
                                    {...register("username")}
                                    error={Boolean(errors.username)}
                                    helperText={Boolean(errors.username) && errors.username.message}
                                />
                                <TextField label="Email"
                                    value={userEdit?.email}
                                    id='email'

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

                                {userEdit !== undefined ? (<LoadingButton
                                    loading={isPending}
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                >
                                    Cập nhật
                                </LoadingButton>) : (<LoadingButton
                                    loading={isPending}
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                >
                                    Thêm mới
                                </LoadingButton>)

                                }
                            </Stack>
                        </form>
                    </Box>
                </Modal>
            </div>
            {/* **************** */}
        </Box>
    );
}