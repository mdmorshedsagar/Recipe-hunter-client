import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Navber from './Pages/Navber.jsx'
import Footer from './Pages/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Navber></Navber>
    <Footer></Footer>
    </>
   
  </React.StrictMode>,
)
