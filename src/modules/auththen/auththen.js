import { Navigate } from "react-router-dom"
import { PATH } from "../../constants/paths"


export const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null
console.log('currentUser: ', currentUser)
export const isCurrentUser = () => {
    // * lấy currentUser từ localstorage
    console.log('currentUser: ', currentUser)
    if (currentUser!==null) {
        return true
    }
    if (currentUser == null) {
        return false
    }


}