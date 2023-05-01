// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from '../assets/yumma_logo.png'
import { Link } from 'react-router-dom';
const Navber = () => {
    return (
        <div className="navbar bg-base-200
        ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link to='/' >Home</Link>
        </li>
      <li>
        <Link to='/blog' >Blog</Link>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
        <img className='w-[150px] h-[42px]' src={logo}  title='yumma logo' alt="yumma logo" srcSet=""  />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/blog' >Blog</Link></li>
      
     
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://plus.unsplash.com/premium_photo-1664701475272-953393050754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </div>
      </label>
    <Link to='/login' className="btn bg-orange-600">login</Link>
  </div>
</div>
    );
};

export default Navber;