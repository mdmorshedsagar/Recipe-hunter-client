import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProviders from './AuthProviders/AuthProviders';
import  { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <>
      <RouterProvider router={router} />
      <Toaster></Toaster>
      </>
    
    </AuthProviders>
 
   
  </React.StrictMode>,
)
