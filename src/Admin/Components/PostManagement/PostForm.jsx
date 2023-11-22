import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const PostForm = () => {
    const [formValue, setFormValue] = useState({
        id: '',
        title: '',
        description: '',
        filename: '',
        postStatus: '',
        userId: '',
        categoryId: '',


    })
    // state validate form
    const [formError, setFormError] = useState({
        id: '',
        title: '',
        description: '',
        filename: '',
        postStatus: '',
        userId: '',
        categoryId: '',
    })

    const dispatch = useDispatch()
    const { postEdit } = useSelector((state) => state.post)


    // validate
    const validate = (name, value) => {
        // switch (name) {
        //     case "id":
        //         if (value.trim() === "") {
        //             return "Vui lòng nhập thông tin";
        //         } else {
        //             return "";
        //         }
        //     case "name":
        //         if (value.trim() === "") {
        //             return "Vui lòng nhập thông tin";
        //         } else {
        //             return "";
        //         }

        //     case "email":
        //         if (value.trim() === "") {
        //             return "Vui lòng nhập thông tin";
        //         } else if (value.match(
        //             new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'))) {
        //             return "vui lòng nhập dung dang email";
        //         } else {
        //             return ""
        //         }


        //     case "price":
        //         if (value.trim() === "") {
        //             return "Vui lòng nhập thông tin";
        //         } else if (!value.match(new RegExp("^[0-9]*$"))) {
        //             return "Giá tiền không hợp lệ";
        //         } else {
        //             return "";
        //         }




        //     default:
        //         return "";
        // }
    };
    // currying function
    const handleFormValue = (name) => (ev) => {

        setFormError(prevState => ({ ...prevState, [name]: validate(name, ev.target.value) }))


        setFormValue({
            ...formValue,
            [name]: ev.target.value,
        })
    }
    // chạy khi dữ liệu trong dependency thay đổi
    useEffect(() => {
        if (postEdit) {
            setFormValue(postEdit)
            setFormError({
                id: '',
                title: '',
                description: '',
                filename: '',
                postStatus: '',
                userId: '',
                categoryId: '',
            })
        }

    }
        , [postEdit])
    return (
        <div className='p-4 sm:ml-64'>

            <div className='container '>

                <form className=""
                    onSubmit={(event) => {
                        event.preventDefault()
                        const validationError = {}
                        Object.keys(formValue).forEach((name) => {
                            const error = validate(name, formValue[name])
                            if (error && error.length > 0) {
                                validationError[name] = error//thêm name vào obj validationError
                            }
                        })
                        if (Object.keys(validationError).length > 0) {
                            setFormError({ ...validationError });
                            return;
                        }

                        // if (userEdit) {
                        //     dispatch(adminActions.updateuser(formValue))

                        // } else {
                        //     dispatch(adminActions.login())
                        // }

                        setFormValue({
                            id: '',
                            title: '',
                            description: '',
                            filename: '',
                            postStatus: '',
                            userId: '',
                            categoryId: '',
                        })
                    }
                    }
                >
                    <div className="grid items-end gap-6 mb-6 mt-7 md:grid-cols-2">
                        {/* ID */}
                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_id" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                onChange={
                                    handleFormValue('id')
                                }
                                onBlur={
                                    handleFormValue('id')
                                }
                                value={formValue.id}

                                disabled={formValue.id === postEdit?.id}
                            />
                            {/* {formError.id && (
                                <p>
                                    <small className="text-danger">{formError.id}</small>
                                </p>
                            )} */}
                            <label for="floating_outlined_id" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">ID</label>
                        </div>

                        {/* TITLE */}

                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_title"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleFormValue('title')

                                }
                                value={formValue.title}
                            />
                            {/* {formError.name && (
                                <p>
                                    <small className="text-danger">{formError.name}</small>
                                </p>
                            )} */}
                            <label for="floating_outlined_title" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Title</label>
                        </div>

                        {/* DESCRIPTION */}
                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_description"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleFormValue('description')

                                }
                                value={formValue.description}
                            />
                            {/* {formError.email && (
                                <p>
                                    <small className="text-danger">{formError.email}</small>
                                </p>
                            )} */}
                            <label for="floating_outlined_descriptions" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Description</label>
                        </div>


                        {/* <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-white">Select an option</label> */}
                        {/* <select id="countries"
                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={handleFormValue('roleId')}
                            value={formValue.roleId == 1 ? ('Admin') : ('User')}
                        >
                            <option selected>Vai trò</option>
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                        </select> */}
                        {/* FILENAME */}
                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_filename"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleFormValue('filename')

                                }
                                value={formValue.filename}
                            />
                            {/* {formError.roleId && (
                                <p>
                                    <small className="text-danger">{formError.roleId}</small>
                                </p>
                            )} */}
                            <label for="floating_outlined_filename" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Filename</label>
                        </div>
                        {/* POSTSTATUS */}

                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_poststatus"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleFormValue('postStatus')

                                }
                                value={formValue.postStatus}
                            />
                            {/* {formError.name && (
                                <p>
                                    <small className="text-danger">{formError.name}</small>
                                </p>
                            )} */}
                            <label for="floating_outlined_poststatus" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Poststatus</label>
                        </div>
                        {/* USERID */}

                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_userid"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleFormValue('userId')

                                }
                                value={formValue.userId}
                            />
                            {/* {formError.name && (
                                <p>
                                    <small className="text-danger">{formError.name}</small>
                                </p>
                            )} */}
                            <label for="floating_outlined_userid" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">User ID</label>
                        </div>
                        {/* CATEGORYID */}

                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_categoryid"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleFormValue('categoryId')

                                }
                                value={formValue.categoryId}
                            />
                            {/* {formError.name && (
                                <p>
                                    <small className="text-danger">{formError.name}</small>
                                </p>
                            )} */}
                            <label for="floating_outlined_categoryid" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Category ID</label>
                        </div>
                    </div>


                    <div className='mt-4'>
                        {postEdit ? (

                            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                Update</button>
                        ) : (
                            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                Add</button>
                        )}


                    </div>
                </form>
            </div>
        </div>
    )
}
