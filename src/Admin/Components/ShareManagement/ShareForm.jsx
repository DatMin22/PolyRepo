import React from 'react'

export const ShareForm = () => {
    return (

        <div className='p-4 sm:ml-64'>
            <div className='container '>


                <div className="grid items-end gap-6 mb-6 mt-7 md:grid-cols-2">
                    {/* ID */}
                    <div class="relative mt-4">
                        <input type="text" id="floating_outlined_id"
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
                            )} */}
                        <label for="floating_outlined_id" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">ID</label>
                    </div>
                    {/* POST ID */}
                    <div class="relative mt-4">
                        <input type="text" id="floating_outlined_postid"
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
                            )} */}
                        <label for="floating_outlined_postid" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Post ID</label>
                    </div>
                    {/* USER ID */}
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
                            )} */}
                        <label for="floating_outlined_userid" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">User ID</label>
                    </div>
                    {/* CONTENT */}
                    <div class="relative mt-4">
                        <input type="text" id="floating_outlined_content"
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
                            )} */}
                        <label for="floating_outlined_content" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Content</label>
                    </div>
                    {/* LINK */}
                    <div class="relative mt-4">
                        <input type="text" id="floating_outlined_link"
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
                            )} */}
                        <label for="floating_outlined_link" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Link</label>
                    </div>
                    {/* SHARE STATUS */}
                    <div class="relative mt-4">
                        <input type="text" id="floating_outlined_sharestatus"
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
                            )} */}
                        <label for="floating_outlined_sharestatus" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Sharestatus</label>
                    </div>
                </div>
            </div>
        </div>

    )
}
