import footer from './Footer.module.css'
export const Footer = () => {
    return (
        <div className={`${footer.footer} ` + " "}>
            <div className={`${footer.footer__content} ` + " row p-5 m-0 justify-content-center align-items-center h-100 "}>
                <div className="col-5 ">
                    <a className={`` + " "}
                        href="../index.html">
                        <img className={`${footer.logo}`} src="./images/logoPolyRepo.png" alt="" />
                    </a>

                    <p>Khám phá trên 4.4 triệu hình ảnh được chia sẻ bởi cộng đồng của chúng tôi.</p>
                    <ul className={`` + "d-flex"}>
                            <li><i className="bx bxl-instagram mr-2" /></li>
                            <li><i className="bx bxl-pinterest mr-2" /></li>
                            <li><i className="bx bxl-twitter mr-2" /></li>
                            <li><i className="bx bxl-facebook mr-2" /></li>

                    </ul>
                </div>
                <div className="col">
                    <h4 className='mb-5 text-secondary'>Cộng đồng</h4>
                    <p>Blog</p>
                    <p>Người sáng tạo</p>
                    <p>Diễn đàn</p>
                    <p>Hình ảnh phổ biến</p>
                </div>
                <div className="col">
                    <h3 className='mb-5 text-secondary'>Giới thiệu</h3>
                    <p>Về chúng tôi</p>
                    <p>Điều khoản dịch vụ</p>
                    <p>Liên hệ</p>
                    <p>Đóng góp ý kiến</p>
                </div>
            </div>
        </div>
    )
}
