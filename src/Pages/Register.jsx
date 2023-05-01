// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <form >
                <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="inter your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" placeholder="Inter photo url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="inter your email address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="inter a password " className="input input-bordered" />
          <label className="label">
          <div className='label'>
      <input  type="checkbox" name="checkbox"/>
      <p >terms and privacy</p>
    </div>
          </label>

          <h1 className='text-xl'>If you register please <Link className='text-orange-700 font-bold' to='/login'>Login</Link> </h1>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-600">Registration</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </form>
    
    );
};

export default Register;