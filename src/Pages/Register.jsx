// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProviders/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {createRegister} = useContext(authContext);
  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,img,email, password);
   createRegister (email,password)
   .then(async(result) => {
    const user = result.user;
    await updateProfile(user,{
      displayName: name ,
      photoURL: img
    }).then(() => {
    }).catch(() =>{})
    console.log(user);
    form.reset();
  })
  .catch((error) => {
    
    const errorMessage = error.message;
       console.log(errorMessage)
  });
  }
  return (
    <form onSubmit={handleRegister}>
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
                <input
                  type="text"
                  name='name'
                  placeholder="inter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="text"
                  name='img'
                  placeholder="Inter photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="inter your email address"
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
                  placeholder="inter a password "
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <div className="label">
                    <input type="checkbox" name="checkbox" />
                    <p>terms and privacy</p>
                  </div>
                </label>

                <h1 className="text-xl">
                  If you register please{" "}
                  <Link className="text-orange-700 font-bold" to="/login">
                    Login
                  </Link>{" "}
                </h1>
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
