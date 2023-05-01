// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset();
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl w-[300px] md:w-[400px] font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="Inter email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="Inter password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

                <h1 className="text-xl">
                  If you new please{" "}
                  <Link className="text-orange-700 font-bold" to="/register">
                    Registration
                  </Link>{" "}
                </h1>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-600">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
