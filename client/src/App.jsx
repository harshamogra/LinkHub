
import  './App.css'
import Home from './pages/home/Home'
import Profilepage from './pages/profile/Profilepage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/profile/:username',
    element: <Profilepage/>
  }
]
)

function App() {
  
  return (
      <RouterProvider router={router}/>
  )
}

export default App
