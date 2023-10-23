import carousel from './carousel.module.css'
export const Carousel = () => {
    return (
        <div className={`${carousel.carousel} ` + 'd-flex justify-content-center align-items-top'}>
            <div className='text-center text-white m-5 '>
                <h2 className='mt-4'>Nơi lưu trữ các dự án của sinh viên FPT Polytechnic</h2>
                <div className="form-group w-75 m-auto ">
                    <input type="text" className={`${carousel.inpSearch}  ` + "form-control my-4 "} name id aria-describedby="helpId" placeholder='Nhập tên dự án cần tìm...' />
                    {/* <i class={`${carousel.searchIcon} `+'bx bx-search-alt-2'}></i> */}

                </div>

            </div>
        </div>
    )
}
