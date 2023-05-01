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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
   
  </React.StrictMode>,
)
