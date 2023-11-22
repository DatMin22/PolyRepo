import React from 'react'

export const LikeForm = () => {
    return (
        <div className='p-4 sm:ml-64'>

            <div className='container '>

                <form className=""
                // onSubmit={(event) => {
                //     event.preventDefault()
                //     const validationError = {}
                //     Object.keys(formValue).forEach((name) => {
                //         const error = validate(name, formValue[name])
                //         if (error && error.length > 0) {
                //             validationError[name] = error//thêm name vào obj validationError
                //         }
                //     })
                //     if (Object.keys(validationError).length > 0) {
                //         setFormError({ ...validationError });
                //         return;
                //     }

                //     if (userEdit) {
                //         dispatch(adminActions.updateuser(formValue))

                //     } else {
                //         dispatch(adminActions.login())
                //     }

                //     setFormValue({
                //         id: '',
                //         name: '',
                //         role: '',
                //         email: '',
                //     })
                // }
                // }
                >
                    <div className="grid items-end gap-6 mb-6 mt-7 md:grid-cols-2">
                        {/* ID */}
                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_id" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            // onChange={
                            //     handleFormValue('id')
                            // }
                            // onBlur={
                            //     handleFormValue('id')
                            // }
                            // value={formValue.id}

                            // disabled={formValue.id === userEdit?.id} 
                            />
                            {/* {formError.id && (
                <p>
                    <small className="text-danger">{formError.id}</small>
                </p>
            )} */}
                            <label for="floating_outlined_id" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">ID</label>
                        </div>

                        {/* USERNAME */}

                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_userid"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            // onChange={handleFormValue('name')

                            // }
                            // value={formValue.name}
                            />
                            {/* {formError.name && (
                        <p>
                            <small className="text-danger">{formError.name}</small>
                        </p>
                    )
                    } */}
                            <label for="floating_outlined_userid" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">UserId</label>
                        </div>

                        {/* EMAIL */}
                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_postid"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            // onChange={handleFormValue('email')

                            // }
                            // value={formValue.email} 
                            />
                            {/* {formError.email && (
                        <p>
                            <small className="text-danger">{formError.email}</small>
                        </p>
                    )} */}
                            <label for="floating_outlined_postid" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">PostId</label>
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

                        <div class="relative mt-4">
                            <input type="text" id="floating_outlined_likestatus"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            // onChange={handleFormValue('roleId')

                            // }
                            // value={formValue.roleId == 1 ? ('Admin') : ('User')}
                            />
                            {/* {formError.roleId && (
                <p>
                    <small className="text-danger">{formError.roleId}</small>
                </p>
            )} */}
                            <label for="floating_outlined_likestatus" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">LikeStatus</label>
                        </div>


                    </div>


                    <div className='mt-4'>
                        {/* {userEdit ? (

                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Update</button>
                ) : (
                    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Add</button>
                )} */}


                    </div>
                </form>
            </div>
        </div>
    )
}
