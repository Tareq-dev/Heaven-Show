import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavPage from "../NavPage/NavPage";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }

  const login = () => {
    signInWithEmailAndPassword(email, password);
    toast('Thanks for signing in')
    navigate(from, { replace: true });
  };
  return (
    <div>
      <div>
        <NavPage />
        <div className="signup">
          <div className="d-flex justify-content-center py-5">
            <div className="signup-blur px-5 py-5">
              <div>
                <h2 className="text-center">Log In</h2>
                <form className="">
                  <br />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 px-2 py-1 border"
                    type="email"
                    placeholder="Email"
                  />
                  <br />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 px-2 py-1 border"
                    type="password"
                    placeholder="Password"
                  />
                  <br />
                  <p>{error?"" : error.message}</p>
                  <button onClick={login} className="mt-2 w-100 bg-info">
                    Login
                  </button>
                  <Link
                    to="/signup"
                    className="text-danger fw-bold d-block text-decoration-none mt-2 mb-3"
                  >
                    Don't have an account?
                  </Link>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
