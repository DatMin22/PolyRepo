import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import header from './Header.module.css'
import { useEffect } from 'react'
import { getUserByEmail } from '../../store/Auth/slice'
import { Link } from 'react-router-dom'
{/* <p className={`${style.subTitle} ${style['heading']}`}>Sub Title</p> */ }
export const Header = () => {
    const { isLogin, userLogin, userIsLogin } = useSelector(state => state.auth)
    console.log('userIsLogin: ', userIsLogin);
    const dispatch = useDispatch()
    console.log('isLogin: ', isLogin)
    // chạy khi dữ liệu trong dependency thay đổi

    return (
        <>


            <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./images/logoPolyRepo.png" className="h-14" alt="PolyRepo Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </Link>
                    


                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium px-4 md:p-0 mt-4 b order border-gr ay-100 rounded-lg bg-gray -50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg- white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


                            <li>
                                <Link className="block text-xl py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    // style={{
                                    //     borderRadius: '40px',
                                    //     color: '#23424E',
                                    //     height: '100%'
                                    // }}
                                    to={'/uploadPost'}
                                >
                                    <span>Tải lên</span>
                                    {/* <box-icon name='upload' flip='horizontal' color='#23424e' ></box-icon> */}
                                    <i className='bx bx-upload bx-flip-horizontal'
                                        style={{
                                            verticalAlign: 'middle',
                                            marginBottom: '.1em',
                                            // backgroundColor:'red'
                                        }}></i>
                                </Link>
                            </li>
                            <li
                                style={{ display: isLogin ? "none" : "block" }}>
                                <a
                                    className="block text-xl py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    href='' data-toggle="modal" data-target="#loginModal"
                                >
                                    <span>Đăng nhập</span>
                                </a>

                            </li>
                            <li className=" "
                                style={{ display: isLogin ? "none" : "block" }}>
                                <a
                                    className="block text-xl py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                    href="#" data-toggle="modal" data-target="#registerModal">Đăng ký </a>
                            </li>
                            <li className=""
                                style={{ display: isLogin ? "block" : "none" }}>
                                <a
                                    className="block text-xl py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                    href="#" >{!isLogin ? `` : `${userLogin.email}`}</a>
                            </li>
                            <li className=""
                            // style={{ display: userIsLogin?.roleId == 1 ? "block" : "none" }}
                            >
                                <Link
                                    className="block text-xl py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                    to={'admin'}>Admin </Link>
                            </li>
                            {/* <li className=""
                            // style={{ display: userIsLogin?.roleId == 1 ? "block" : "none" }}
                            >
                                <Link
                                    className="block text-xl py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                    to={'/demoLike'}>demolike </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>


            <div className={`${header.header} ` + "d-flex"} >


                {/* <!-- Modal login --> */}
                <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModal" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">

                            <div className="modal-body">
                                <Login />
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Modal đăng ký --> */}
                <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModal" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">

                            <div className="modal-body">
                                <Register />
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
