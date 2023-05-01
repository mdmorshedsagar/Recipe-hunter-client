// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navber from './Pages/Navber';
import Footer from './Pages/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
 
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
     
      
    </div>
  );
};

export default App;