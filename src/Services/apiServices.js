import axios from 'axios'



const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }

});
export const get = async (url) => {
    return await instance.get(url)

}

//* thêm mới 1 đối tượng
export const post = async (url, data) => {
    return await instance.post(url, data)
}

//* cập nhật 1 đối tượng
export const put = async (url) => {
    return await instance.put(url)

}

//* xóa 1 đối tượng
export const remove = async (url) => {
    return await instance.delete(url)

}

// * Call API đăng nhập
export const login = async (url, email, password) => {

    return await instance.post(
        url,
        {
            email: email,
            password: password
        }
    )


}
// * Call API đăng ký
export const register = (url, data) => {

    return post(url, data)


}




