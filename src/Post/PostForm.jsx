import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost, upLoadFile } from '../store/Post/slice';
import { Uploader } from "uploader" // Installed by "react-uploader".
import { UploadButton } from "react-uploader"
import { useEffect } from 'react';
import { getUserByEmail } from '../store/Auth/slice';
import { HeaderDemo } from '../Component/Header/HeaderDemo';
import { categoryActions, getAllCategory } from '../store/Category/slice';
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoadingButton } from "@mui/lab";
import { Navigate } from 'react-router-dom';
import { PATH } from '../constants/paths';
import { currentUser, isCurrentUser } from '../modules/auththen/auththen';
const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});
export const PostForm = () => {
    const { fileUpload } = useSelector(state => state.post)
    const { userLogin, isLogin, userIslogin } = useSelector(state => state.auth)
    const { listCategory } = useSelector(state => state.category)
    console.log('currentUser: ', currentUser)
    if (currentUser == null && !isLogin) {
        return <Navigate to={PATH.SIGNIN} />
    }
    // currentUser
    const disPatch = useDispatch()

    const [formValue, setFormValue] = useState({
        title: '',
        description: '',
        category_id: 1,
        user_id: currentUser?.id,
        filename: '',
        countlike: 0
    });


    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setFormValue({ ...formValue, [name]: value })
        console.log("evnet.target: ", event.target.value);
    }
    const handleOnChangeFile = (event) => {
        console.log('event: ', event);



    }

    const handlePost = () => {
        if (isLogin == true) {
            disPatch(addPost(formValue))
        } else {
            alert('bạn chưa đăng nhập')
        }
    }

    // *upload file
    const uploader = Uploader({
        apiKey: "free" // Get production API keys from Bytescale
    });
    const options = { multi: true };
    useEffect(() => {
        // disPatch(getListPost())
        disPatch(getAllCategory())
        // fetch animals data on component mount

    }, [])

    const queryClient = useQueryClient();
    const { handleSubmit, register, control, setValue, watch } = useForm({
        defaultValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            maNhom: 'GROUP_CODE',
            ngayKhoiChieu: "",
            sapChieu: true,
            dangChieu: false,
            hot: true,
            danhGia: "",
            hinhAnh: undefined,
        },
    });

    const file = watch("hinhAnh"); // [0]

    // useQuery({ queryKey: ["list-movie-admin"]})
    const { mutate: handleAddMovie, isPending } = useMutation({
        mutationFn: (payload) => addMovieAPI(payload),
        onSuccess: () => {
            // call api get list
            queryClient.invalidateQueries({ queryKey: ["list-movie"] });
        },
    });

    const onSubmit = (formValues) => {
        console.log("formValues", formValues.hinhAnh[0]);
        const formData = new FormData();
        formData.append("tenPhim", formValues.tenPhim);
        formData.append("trailer", formValues.trailer);
        formData.append("moTa", formValues.moTa);
        formData.append("maNhom", formValues.maNhom);
        formData.append("sapChieu", formValues.sapChieu);
        formData.append("dangChieu", formValues.dangChieu);
        formData.append("hot", formValues.hot);
        formData.append("danhGia", formValues.danhGia);
        formData.append("hinhAnh", formValues.hinhAnh[0]);
        handleAddMovie(formData);
    };

    const previewImage = (file) => {
        return URL.createObjectURL(file);
    };

    useEffect(() => {
        if (file?.length > 0) {
            console.log("previewImage", previewImage(file?.[0])); // url
        }
    }, [file]);

    console.log(file);
    return (
        <div>
            <div>
                <Typography component={"h2"}>Đăng bài</Typography>

                <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ marginTop: 20 }}
                >
                    <Grid item md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack direction={"column"} spacing={3}>
                                <TextField
                                    label="Tiêu đề"
                                    fullWidth
                                    {...register("title")}
                                />
                                <TextField label="Mô tả" fullWidth {...register("moTa")} />
                                <TextField label="Nội dung" {...register("content")} />
                                {!file && (
                                    <Button
                                        component="label"
                                        variant="contained"
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Tải lên
                                        <VisuallyHiddenInput
                                            type="file"
                                            {...register("hinhAnh")}
                                            accept=".png,.gif,.jpg"
                                        />
                                    </Button>
                                )}
                                {file?.length > 0 && (
                                    <>
                                        <img src={previewImage(file[0])} width={240} />
                                        <Button onClick={() => setValue("hinhAnh", undefined)}>
                                            Xoá hình
                                        </Button>
                                    </>
                                )}
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
                    </Grid>
                </Grid>
            </div>


            {/* *** */}
            {/* /////////////////// */}


            <form class="d-none max-w-md mx-auto mt-40"
                onSubmit={(event) => {
                    event.preventDefault()
                    handlePost()
                    console.log('formValue:', formValue);
                }}>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        name='title'
                        id='title'
                        style={{

                        }}
                        onChange={handleOnChange} />
                    <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tiêu đề</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <textarea type="text"
                        name='description'
                        id='description'
                        style={{
                        }}
                        value={formValue.description}

                        onChange={handleOnChange}
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mô tả</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password"
                        // name='category_id'
                        // id='category_id'
                        // style={{
                        //     borderRadius: '8px'
                        // }}
                        // onChange={handleOnChange}
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="category_id" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
                {/* <div class="grid md:grid-cols-2 md:gap-6"> */}
                <div class="relative z-0 w-full mb-5 group">
                    {/* <label htmlFor=""><span>Ngành nghề</span></label> */}

                    <select
                        name='category_id'
                        id='category_id'
                        style={{
                            borderRadius: '8px'
                        }}
                        onChange={handleOnChange}
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    >
                        {
                            listCategory?.map((cate) => {
                                return (
                                    <option key={cate.id} value={cate.id}>{cate.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                {/* </div> */}

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            {/* /////////////////// */}

            <form action="" className='container '

            >
                <h2 className='text-center mt-5 mb-4' style={{
                    // text underline
                    'text-decoration': 'underline'

                }}>ĐĂNG BÀI</h2>

                <div className="row">

                    <div className="col-6">
                        <label htmlFor="title  "><span>Tiêu đề</span></label>
                        <input type="text"
                            className='form-control border-gray-300'

                        />

                    </div>
                    <div className="col-6">
                        <label htmlFor="description"><span>Mô tả dự án</span></label>
                        <textarea type="text"
                            className='form-control border-gray-300'

                        />
                    </div>
                    <div className="col-6">

                        <select
                            className='form-control'
                        >
                            {
                                listCategory?.map((cate) => {
                                    return (
                                        <option key={cate.id} value={cate.id}>{cate.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='col-6 d-flex mt-4 ' style={{
                        width: '100%'
                    }}>



                        <UploadButton uploader={uploader}
                            options={options}
                            onComplete={files => {
                                files.map(x => {
                                    console.log('x: ', x.originalFile.originalFileName)
                                    disPatch(upLoadFile(x.originalFile))
                                    setFormValue({ ...formValue, filename: x.originalFile.originalFileName })
                                    console.log('formValue: ', formValue);
                                })
                            }}
                        >

                            {({ onClick }) =>
                                <button className='btn btn-info' onClick={onClick}>
                                    Tải tệp lên...
                                </button>

                            }

                        </UploadButton>

                        <p className='mx-3' style={{
                            verticalAlign: 'middle'
                        }}
                        >{formValue.filename}</p>
                    </div>
                    <div className="col-12 mt-3 ">
                        <button className='btn btn-post'>ĐĂNG</button>
                        {/* <button className='btn btn-dark'>Update</button> */}
                    </div>
                </div>
            </form>
        </div >
    )

}
