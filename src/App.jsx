
// eslint-disable-next-line no-unused-vars
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Main from './layout/Main'
import Products from './Pages/Products/Products'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Cart from './Pages/Cart/Cart'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signUp',
          element: <SignUp />
        },
        {
          path: '/cart',
          element: <Cart />
        },
      ]
    },
    {
      path: '*',
      element: <p>404 NOT FOUND</p>
    }
  ])
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
