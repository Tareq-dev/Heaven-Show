import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavPage from "../NavPage/NavPage";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import Footer from "../Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <NavPage />
      <div className="signup">
        <div className="d-flex justify-content-center py-5">
          <div className="signup-blur px-5 py-5">
            <div>
              <h2 className="text-center">Log In</h2>
              <form onSubmit={login} className="">
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
                <p>{error ? "" : error}</p>
                <div className="d-flex justify-content-center">
                  <input
                    value="Login"
                    type="submit"
                    className="mt-2 border-0 fw-bold rounded bg-info"
                  ></input>
                </div>
                <Link
                  to="/signup"
                  className="text-danger fw-bold d-block text-decoration-none mt-2 mb-3"
                >
                  Don't have an account?
                </Link>
                <Link to="/reset-password" className="text-danger fw-bold d-block mb-3">
                  Forget Password ?
                </Link>
                <SocialLogin />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
