
// eslint-disable-next-line no-unused-vars
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Main from './layout/Main'
import Products from './Pages/Products/Products'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Cart from './Pages/Cart/Cart'
import ProductDetails from './Pages/Products/ProductDetails'
import DashboardLayout from './layout/DashboardLayout'
import AllProducts from './Pages/Dashboard/AllProducts'
import AllCustomers from './Pages/Dashboard/AllCustomers'
import AddProduct from './Pages/Dashboard/AddProduct'
import PrivateRoute from './PrivateRoute/PrivateRoute'

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
          path: '/productDetails/:id',
          element: <ProductDetails />,
          loader: ({ params }) => {
            return fetch(`https://fakestoreapi.com/products/${params.id}`)
          }
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
          element: <PrivateRoute><Cart /></PrivateRoute>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
      children: [
        {
          path: '/dashboard/allProducts',
          element: <PrivateRoute><AllProducts /></PrivateRoute>
        },
        {
          path: '/dashboard/allCustomers',
          element: <PrivateRoute><AllCustomers /></PrivateRoute>
        },
        {
          path: '/dashboard/addProduct',
          element: <PrivateRoute><AddProduct /></PrivateRoute>
        }

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
