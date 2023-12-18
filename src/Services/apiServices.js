import axios from 'axios'



const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
    // headers: { 'content-type': 'application/json' }

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

export const addPost = async (formValue) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/posts/add`,
            formValue,
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response.data.data
        // console.log("response", response)
    } catch (error) {
        console.log("error", error);
    }
}
export const addUser = (payload) => {
    post(
        '/signup',
        payload
    )
        .then((resp) => {
            console.log('res: ', resp.data)


        })
        .catch((error) => {
            console.log('error: ', error);
            alert("Đã có lỗi xảy ra. Đăng ký thất bại")

        })

}
export const getUserById = (id) => {
    get(
        `/user/${id}`,

    )
        .then((resp) => {
            console.log('res: ', resp.data)


        })
        .catch((error) => {
            console.log('error: ', error);
            alert("Đã có lỗi xảy ra")

        })

}



const url = "http://localhost:8080/user/update/1";

const data = {
    name: "JaneDoe111",
    roleId: 2,
    email: "nguyenvana@gmail.com",
};
export const updateUser = (id, data) => {
    fetch(`http://localhost:8080/user/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        // header là json
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.log('response: ', response);
            // Xử lý kết quả của yêu cầu

            // alert('done')
        })
        .catch((error) => {
            console.log('error: ', error);
            // Xử lý lỗi
            alert('error')
        })
}