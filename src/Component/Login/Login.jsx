import { useDispatch, useSelector } from 'react-redux'
import Auth from '../../../public/css/auth.module.css'
import * as apiServices from '../../Services/apiServices'
import { authActions, getUserByEmail, login } from '../../store/Auth/slice'
import { useState } from 'react'
import { useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
export const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const { userLogin, isLogin, userIslogin } = useSelector((state) => state.auth)
    console.log('userIslogin: ', userIslogin);
    console.log('userLogin: ', userLogin);
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',


    })
    // state validate form
    const [formError, setFormError] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()
    // const { userEdit } = useSelector((state) => state.admin)
    // validate
    const validate = (name, value) => {
        switch (name) {

            case "email":
                if (value.trim() === "") {
                    return "Vui lòng nhập thông tin";
                } else if (value.match(
                    new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'))) {
                    return "vui lòng nhập đúng định dạng email";
                } else {
                    return ""
                }


            case "password":
                if (value.trim() === "") {
                    return "Vui lòng nhập thông tin";
                } else {
                    return "";
                }




            default:
                return "";
        }
    };
    // currying function
    const handleFormValue = (name) => (ev) => {

        setFormError(prevState => ({ ...prevState, [name]: validate(name, ev.target.value) }))


        setFormValue({
            ...formValue,
            [name]: ev.target.value,
        })
    }
    useEffect(() => {
        // console.log("render")
        // console.log(userLogin)
        // if (isLogin) {
        //     dispatch(getUserByEmail('nguyenvana@gmail.com'))
        //     return
        // }
    }

    )


    const [user, setUser] = useState();

    // Lưu thông tin người dùng vào cookie
    function handleLogin(user) {
        setCookie('userLogin', user.email);
    }


    // Lấy thông tin người dùng từ cookie
    function getLoggedInUser() {
    }
    return (
        <div className={`${Auth.auth} ` + ""}>
            <div className={`${Auth.logo} ` + "pl-5"}>
                <img src="./images/logoPolyRepo.png" alt="" />
            </div>

            <div className={`${Auth.content} ` + "container"}>
                <div className={`${Auth.AuthImg}`}>

                    <h2 className="pb-3 bg-transparent text-white" style={{}}>Đăng nhập</h2>
                    <img className='w-100' src="./images/Login-thumbnail.png" alt="" />
                </div>
                <form className={`${Auth.formAuth} ` + ""}
                    onSubmit={(event) => {
                        event.preventDefault()
                        const validationError = {}
                        Object.keys(formValue).forEach((name) => {
                            // key : id | name | price | image | productType
                            const error = validate(name, formValue[name])
                            if (error && error.length > 0) {
                                validationError[name] = error//thêm name vào obj validationError
                            }
                        })
                        if (Object.keys(validationError).length > 0) {
                            setFormError({ ...validationError });
                            return;
                        }


                        dispatch(login(formValue))
                        handleLogin(formValue)
                        dispatch(getUserByEmail(formValue.email))

                        setFormValue({
                            email: '',
                            password: '',
                        })

                    }}>
                    <div className="">

                        <div className='mt-3'>
                            <small className='text-dark pt-4'>Email</small>
                            <input type="text" className="form-control text-white bg-transparent"
                                onChange={
                                    handleFormValue('email')
                                }
                                onBlur={
                                    handleFormValue('email')
                                }
                            />
                            {
                                formError.email && (
                                    <p>
                                        <small className="text-warning">{formError.email}</small>
                                    </p>
                                )}
                        </div>
                        <div className="mt-3">
                            <small className='text-dark pt-4'>Mật khẩu</small>
                            <input type="password" className="form-control text-white bg-transparent"
                                onChange={
                                    handleFormValue('password')
                                }
                                onBlur={
                                    handleFormValue('password')
                                } />
                            {
                                formError.password && (
                                    <p>
                                        <small className="text-warning">{formError.password}</small>
                                    </p>
                                )}
                        </div>

                        <button className={`${Auth.btnAuth} ` + "btn mt-5 py-3 w-100"}>
                            Đăng nhập
                        </button>
                        <span className='d-block text-center' style={{ fontSize: 'small' }}>Chưa có tài khoản? <a href="">Đăng ký.</a></span>
                        <ul className='d-flex justify-content-center mt-3'

                        >
                            <li style={{}}>
                                <img className='mx-2' style={{ width: 50 }} src="./images/google-icon.png" alt="" />
                            </li>
                            <img className='mx-2' style={{ width: 50 }} src="./images/icons8-facebook-240.png" alt="" />
                            <li style={{}}></li>
                        </ul>
                    </div>




                </form>
            </div>
        </div>
    )
}
