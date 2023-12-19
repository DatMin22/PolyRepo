import { useDispatch, useSelector } from 'react-redux'
import carousel from './carousel.module.css'
export const Carousel = () => {
    const { postList } = useSelector((state) => state.post)
    const dispatch = useDispatch()
    console.log('postList: ', postList)
    return (
        <div className={`${carousel.carousel} ` + 'd-flex justify-content-center align-items-top mt-20'}>
            <div className='box text-center text-white m-5 '
                style={{
                    backgroundColor: ''
                }}>
                <h2 className='mt-5 font-semibold bg-opacity-10 py-3 px-4'
                    style={{
                        letterSpacing: '.3rem',
                        // 'textShadow': '3px -2px 11px rgba(255,144,0,1)',
                        color: '#fff',
                        fontSize: '3rem'
                    }}
                >
                    Nơi lưu trữ các dự án của sinh viên FPT Polytechnic</h2>
                <div className=" form-group w-75 m-auto ">
                    {/* <input type="text" id="searchInput"
                        onChange={(event) => {
                            const listSearch = postList.filter((post) => {
                                return post.title.toLowerCase().includes(event.target.value.toLowerCase())
                            });
                            setListPost(listSearch)
                        }}
                        style={{
                            borderRadius: '2rem',
                            border: 'none',
                            backgroundColor: '#eee'
                        }} className="w-100 py-3 px-4 text-dark" placeholder="Nhập tên dự án cần tìm..." /> */}

                </div>

            </div>
        </div >
    )
}
