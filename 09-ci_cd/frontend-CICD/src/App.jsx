import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AddBlogs from './pages/Admin/AddBlogs.jsx';
import ListBlog from './pages/Admin/ListBlog.jsx';
import Comments from './pages/Admin/Comments.jsx';
import Layout from './pages/Admin/Layout.jsx';
import Login from './components/Admin/Login.jsx';
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast';
import { useAppContext } from './context/AppContext.jsx';

const App = () => {

  // useEffect(() => {
  //   const handleRightClick = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", handleRightClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleRightClick);
  //   };
  // }, []);

  const {token} = useAppContext();
  
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<BlogPage/>}/>
        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path='addblog' element={<AddBlogs/>} />
          <Route path='listblog' element={<ListBlog/>} />
          <Route path='comments' element={<Comments/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
