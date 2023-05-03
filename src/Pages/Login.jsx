// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProviders/AuthProviders";
import toast from "react-hot-toast";
import { FaGooglePlusG, FaGithub } from "react-icons/fa";
const Login = () => {
  const { createLogin, CreateResetPass, createGoogle, createGithub } =
    useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const position = location.state?.from?.pathname || "/";
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createLogin(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        navigate(position, { replace: true });
        toast.success("Registration successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
        setError("email address and password does not match");
      });
  };
  const handleGoogle = () => {
    createGoogle()
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        navigate(position, { replace: true });
        toast.success("Google signin successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGithub = () => {
    createGithub()
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        navigate(position, { replace: true });
        toast.success("Github signin successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("First input your email");
    }
    CreateResetPass(email)
      .then(() => {
        alert("please check your email ");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl w-[300px] md:w-[400px] font-bold">
                Login now!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <p className="text-lg font-semibold text-red-700">{error}</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Inter email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Inter password"
                      className="input input-bordered grow"
                      required
                    />
                    <button
                      className="border border-base-500 rounded-r-lg"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <p>Hide</p> : <p>Show</p>}
                    </button>
                  </div>

                  <label className="label">
                    <button
                      onClick={handleResetPassword}
                      className="label-text-alt btn btn-link"
                    >
                      Forgot password?
                    </button>
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
                <hr />
                <div className="pt-2">
                  <button
                    onClick={handleGoogle}
                    className="btn btn-outline btn-info w-full"
                  >
                    <FaGooglePlusG className="text-2xl mr-2 font-bold"></FaGooglePlusG>{" "}
                    signin with Google
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleGithub}
                    className="btn btn-outline w-full"
                  >
                    {" "}
                    <FaGithub className="text-2xl mr-2 font-bold"></FaGithub>{" "}
                    signin with Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
