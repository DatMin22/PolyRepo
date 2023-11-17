import carousel from './carousel.module.css'
export const Carousel = () => {
    return (
        <div className={`${carousel.carousel} ` + 'd-flex justify-content-center align-items-top'}>
            <div className='text-center text-white m-5 '>
                <h2 className='mt-4 text-3xl'>Nơi lưu trữ các dự án của sinh viên FPT Polytechnic</h2>
                <div className="form-group w-75 m-auto ">
                    <input type="text" id="searchInput" class="bg-gray-50  border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 h-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tên dự án cần tìm..." />
                    {/* <input type="text" className={`${carousel.inpSearch}  ` + "form-control my-4 "} name id aria-describedby="helpId" placeholder='Nhập tên dự án cần tìm...' /> */}
                    {/* <i class={`${carousel.searchIcon} `+'bx bx-search-alt-2'}></i> */}

                </div>

            </div>
        </div>
    )
}
