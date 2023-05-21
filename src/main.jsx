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
import AllToys from './components/AllToys.jsx';
import AddAToy from './components/AddAToy.jsx';
import MyToys from './components/MyToys.jsx';
import AllToysDetails from './components/AllToysDetails.jsx';
import UpdateAddAToys from './components/UpdateAddAToys.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://assignment-11-server-tau-amber.vercel.app/tabToys'),
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
        loader:({params})=>fetch(`https://assignment-11-server-tau-amber.vercel.app/volunteer/${params.id}`)
      },
      {
        path:'/all_toys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('https://assignment-11-server-tau-amber.vercel.app/addAToys')
      },
      {
        path:'/add_a_toys',
        element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path:'/my_toys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/all_toys/:id',
        element:<PrivateRoute><AllToysDetails></AllToysDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-11-server-tau-amber.vercel.app/addAToys/${params.id}`)
      },
      {
        path:'/my_toys/:id',
        element:<UpdateAddAToys></UpdateAddAToys>,
        loader:({params})=>fetch(`http://localhost:5000/addAToys/${params.id}`)
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
