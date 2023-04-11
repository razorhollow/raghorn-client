// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import PostList from './pages/PostList/PostList'

// components
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import BottomNav from './components/BottomNav/BottomNav'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as categoryService from './services/categoryService'

// stylesheets
import './App.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'

// types
import { Post, User, Category } from './types/models'

//theme

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([]);

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
    navigate('/posts')
  }

  useEffect(() => {
    const fetchAllPosts = async() => {
      const data = await postService.index()
      setPosts(data)
    }
    if (user) fetchAllPosts()
  }, [user])

  useEffect(() => {
    const fetchAllCategories = async() => {
      const categoryData = await categoryService.index()
      console.log("Fetched categories:", categoryData)
      setCategories(categoryData)
    }
    fetchAllCategories()
  }, [user])

  return (
    <>
      <Routes>
      <Route path="/" element={user ? <Navigate to="/posts" /> : <Landing />} />

        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route 
          path='/posts'
          element={
            <ProtectedRoute user={user}>
              <PostList posts={posts} categories={categories}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
