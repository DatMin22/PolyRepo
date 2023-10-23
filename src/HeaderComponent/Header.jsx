import header from './Header.module.css'
{/* <p className={`${style.subTitle} ${style['heading']}`}>Sub Title</p> */ }
export const Header = () => {
    return (
        <div className={`${header.header} ` + "d-flex"} >
            <nav className="container navbar navbar-expand-lg ">
                <a className={`` + "navbar-brand "}
                    href="../index.html">
                    <img className={`${header.logo}`} src="./images/logoPolyRepo.png" alt="" />
                </a>
                <button className="navbar-toggler d-lg-none " type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <i className='bx bx-menu' style={{
                        fontSize: '2rem',
                        color: '#fff'
                    }}></i>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown mx-4 ">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Khám phá</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Ứng dụng phần mềm</a>
                                <a className="dropdown-item" href="#">Thiết kế đồ họa</a>
                            </div>
                        </li>
                        <li className="nav-item active mx-4 ">
                            <a className="nav-link" href="#">Đăng nhập </a>
                        </li>
                        <li className="nav-item mx-4 ">
                            <button className=" btn bg-white px-3"
                                style={{
                                    borderRadius: '40px',
                                    color: '#23424E',
                                    height:'100%'
                                }}
                                href="#"><span>Tải lên</span>
                                {/* <box-icon name='upload' flip='horizontal' color='#23424e' ></box-icon> */}
                                <i className='bx bx-upload bx-flip-horizontal'
                                    style={{
                                        verticalAlign: 'middle',
                                        marginBottom: '.1em',
                                        // backgroundColor:'red'
                                    }}></i>
                            </button>
                        </li>
                        <li className="nav-item active mx-4 ">
                            <a className="nav-link d-none" href="#">Admin </a>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>

        </div>
    )
}
