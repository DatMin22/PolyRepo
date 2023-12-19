import { combineReducers } from 'redux'
import { adminReducer } from './Admin/slice'
import { authReducer } from './Auth/slice'
import { postReducer } from './Post/slice'
import { categoryReducer } from './Category/slice'
import { likeReducer } from './Like/slice'
import { forgotPassReducer } from './ForgotPass/slice'
import { changePassReducer } from './ChangePass/slice'
import { shareReducer } from './Share/slice'

export const rootReducer = combineReducers({
    // demoRedux: demoReduxReducer,
    // btPhone: btPhoneReducer,
    // btMovieBooking: btMovieBookingReducer,
    // btForm: btFormReducer
    admin: adminReducer,
    auth: authReducer,
    post: postReducer,
    category: categoryReducer,
    like: likeReducer,
    forgotPass: forgotPassReducer,
    changePassword:changePassReducer,
    share:shareReducer
})


