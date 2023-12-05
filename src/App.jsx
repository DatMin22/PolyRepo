import { Carousel } from './Component/Carousel/Carousel'
import { Footer } from './Component/Footer/Footer'
import { Header } from './Component/Header/Header'
import { Login } from './Component/Login/Login'
import { User } from './Admin/Components/User'
import { Register } from './Component/Register/Register'
import { Post } from './Post/Post'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './layouts/UserLayout/UserLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { PostList } from './Post/PostList'
import { PostForm } from './Post/PostForm'
import { HeaderDemo } from './Component/Header/HeaderDemo'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import { PostManagement } from './Admin/Components/PostManagement/PostManagement'
import { DemoLike } from './Component/DemoLike'
import { LikeManagement } from './Admin/Components/LikeManagement/LikeManagement'
import { RoleManagement } from './Admin/Components/RoleManagement/RoleManagement'
import { ShareManagement } from './Admin/Components/ShareManagement/ShareManagement'
import { CommentManagement } from './Admin/Components/CommentManagement/CommentManagement'
import { CategoryManagement } from './Admin/Components/CategoryManagement/CategoryManagement'
import { Dashboards } from './Admin/Components/Dashboards/Dashboards'
import { ForgotPass } from './modules/ForgotPass/ForgotPass'
import { ForgotPassToken } from './modules/ForgotPass/ForgotPassToken'
import { UserProfile } from './modules/UserProfile/UserProfile'
import ChangePass from './modules/ChangePass/ChangePass'
import { PATH } from './constants/paths'
function App() {

  // login()
  // getListUser()
  // ?
  // ! this is a warning
  // // ---------------
  // todo 
  // *
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* <Link/> */}
        {/* <Route path='/' element={<HomePage />} />
                <Route path='about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin/dashboard' element={<AdminPage />} />
                <Route path='/*' element={<Page404 />} /> */}

        {/* Nest Router */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<HomePage />} />

          {/* <Route path='postList' element={<PostList />} /> */}
          <Route path='uploadPost' element={<PostForm />} />
          <Route path={PATH.CHANGE_PASSWORD} element={<ChangePass />} />

          <Route path={PATH.PROFILE} element={<UserProfile />} />



          {/* Dynamic segments */}
          {/* <Route path='animal/:id' element={<AnimalDetails />} /> */}
        </Route>

        {/*  */}
        <Route path={PATH.SIGNIN} element={<Login />}></Route>
        <Route path={PATH.SIGNUP} element={<Register />}></Route>
        <Route path={PATH.CONFIRM_EMAIL} element={<ForgotPass />} />
        <Route path={PATH.FORGET_CHANGE_PASSWORD} element={<ForgotPassToken />} />
        {/*  */}

        <Route path={PATH.DASHBOARD} element={<AdminLayout />}>
          <Route index element={<Dashboards />} />
          <Route path={PATH.POSTS_MANAGEMENT} element={<PostManagement />} />
          <Route path={PATH.USERS_MANAGEMENT} element={<User />} />
          <Route path={PATH.COMMENTS_MANAGEMENT} element={<CommentManagement />} />
          <Route path={PATH.LIKES_MANAGEMENT} element={<LikeManagement />} />
          <Route path={PATH.SHARES_MANAGEMENT} element={<ShareManagement />} />
          <Route path={PATH.CATEGORIES_MANAGEMENT} element={<CategoryManagement />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Carousel />
    //   {/* <Login /> */}
    //   {/* <Register /> */}
    //   {/* <User /> */}
    //   <Post />
    //   <Footer />
    // </div>
  )
}

export default App
