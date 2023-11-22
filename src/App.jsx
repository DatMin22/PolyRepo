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
          <Route path='/demolike' element={<DemoLike />} />


          {/* Dynamic segments */}
          {/* <Route path='animal/:id' element={<AnimalDetails />} /> */}
        </Route>

        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Dashboards />} />
          <Route path='post-management' element={<PostManagement />} />
          <Route path='user-management' element={<User />} />
          <Route path='comment-management' element={<CommentManagement />} />
          <Route path='like-management' element={<LikeManagement />} />
          <Route path='role-management' element={<RoleManagement />} />
          <Route path='share-management' element={<ShareManagement />} />
          <Route path='category-management' element={<CategoryManagement />} />
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
