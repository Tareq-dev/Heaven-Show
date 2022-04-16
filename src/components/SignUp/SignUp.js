import React, { useState } from "react";
import NavPage from "../NavPage/NavPage";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const signIn = () => {
    createUserWithEmailAndPassword(email, password, confirmPassword);
    navigate("/");
  };
  return (
    <div>
      <NavPage />
      <div className="signup">
        <div className="d-flex justify-content-center py-5">
          <div>
            <h2 className="text-center">Sign Up</h2>
            <form className="">
              <input
                className="mt-2 px-2 py-1 border"
                type="text"
                placeholder="Name"
                required
              />
              <br />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 px-2 py-1 border"
                type="email"
                placeholder="Email"
                required
              />
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 px-2 py-1 border"
                type="password"
                placeholder="Password"
                required
              />
              <br />
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 px-2 py-1 border"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <br />
              <p>{error.message}</p>
              <button onClick={signIn} className="mt-2 w-100 bg-info">
                Register
              </button>
              <Link
                to="/login"
                className="text-danger d-block text-decoration-none"
              >
                Allready have an account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
