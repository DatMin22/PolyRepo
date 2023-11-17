import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost, upLoadFile } from '../store/Post/slice';
import { Uploader } from "uploader" // Installed by "react-uploader".
import { UploadButton } from "react-uploader"
import { useEffect } from 'react';
import { getUserByEmail } from '../store/Auth/slice';
import { HeaderDemo } from '../Component/Header/HeaderDemo';
import { categoryActions, getAllCategory } from '../store/Category/slice';
export const PostForm = () => {
    const { fileUpload } = useSelector(state => state.post)
    const { userLogin, isLogin, userIslogin } = useSelector(state => state.auth)
    console.log('userIslogin: ', userIslogin);
    const { listCategory } = useSelector(state => state.category)
    // console.log('listCategory: ', listCategory)
    // console.log('userLogin: ', userLogin);
    // console.log('fileUpload: ', fileUpload);
    const [file, setFile] = useState('')
    // console.log('file: ', file);
    const disPatch = useDispatch()

    const [formValue, setFormValue] = useState({
        title: '',
        description: '',
        category_id: 1,
        user_id: userIslogin.id,
        filename: '',
    });
    // setFormValue({ ...formValue, filename: file })
    console.log('userLogin.: ', userLogin)
    console.log('formValue: ', formValue);

    // useEffect(() => {
    //     // console.log("render")
    //     // console.log(userLogin)
    //     if (isLogin == true) {
    //         disPatch(getUserByEmail(userLogin.email))
    //         console.log(userLogin)
    //         // setTimeout(() => { setFormValue({ ...formValue, user_id: userLogin.id }) }, 1000)
    //         // 
    //     }
    // }, [isLogin]
    // )
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        // if (name == 'user_id') {
        //     value = userLogin.id
        // }
        setFormValue({ ...formValue, [name]: value })
        // console.log('formValue: ', formValue);
        console.log("evnet.target: ", event.target.value);
    }
    const handleOnChangeFile = (event) => {
        console.log('event: ', event);
        setFile(event.target.files[0].name)


        // console.log('event.target.files[0]: ', event.target.files[0].name);

    }

    const handlePost = () => {
        if (isLogin == true) {
            // console.log('userIslogin postForm: ', userIslogin);
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

    return (
        <div>


            <form action="" className='container '
                onSubmit={(event) => {
                    event.preventDefault()
                    handlePost()
                    console.log('formValue:', formValue);
                }}
            >
                <h2 className='text-center mt-5 mb-4' style={{
                    // text underline
                    'text-decoration': 'underline'

                }}>ĐĂNG BÀI</h2>

                <div className="row">
                    <div className="col-6">
                        <label htmlFor="title  "><span>Tiêu đề</span></label>
                        <input type="text"
                            className='form-control'
                            name='title'
                            id='title'
                            onChange={handleOnChange}
                        />

                    </div>
                    <div className="col-6">
                        <label htmlFor="description"><span>Mô tả dự án</span></label>
                        <textarea type="text"
                            className='form-control'
                            name='description'
                            id='description'
                            value={formValue.description}

                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="description"><span>Ngành nghề</span></label>

                        <select
                            className='form-control'
                            name='category_id'
                            id='category_id'
                            onChange={handleOnChange}>
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
