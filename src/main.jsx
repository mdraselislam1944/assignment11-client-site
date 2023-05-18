import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Logout from './components/SignUp.jsx';
import Admin from './components/Admin.jsx';
import AuthProviders from './components/AuthProviders.jsx';
import Blocks from './components/Blocks.jsx';
import Product_detail from './components/product_detail.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/volunteers'),
      },
      {
        path:'/login',
        element:<Login></Login>  
      },
      {
        path:'/signUp',
        element:<Logout></Logout>
      },
      {
        path:'/admin',
        element:<Admin></Admin>
      },
      {
        path:'/blocks',
        element:<Blocks></Blocks>
      },
      {
        path:'/product_detail/:id',
        element:<PrivateRoute><Product_detail></Product_detail></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/volunteer/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
