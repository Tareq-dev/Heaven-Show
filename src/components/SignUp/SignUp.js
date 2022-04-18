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
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const Register = () => {
    createUserWithEmailAndPassword(email, password, confirmPassword);
    navigate("/");
  };
  return (
    <div>
      <NavPage />
      <div className="signup">
        <div>
          <div className="d-flex justify-content-center py-5">
            <div className="signup-blur px-5 py-5">
              <h2 className="text-center">Sign Up</h2>
              <form>
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
                <div className="d-flex justify-content-center">
                  <button
                    onClick={Register}
                    className="mt-2 bg-info border-0 rounded-3 py-1 px-3 mb-2"
                  >
                    Register
                  </button>
                </div>
                <Link
                  to="/login"
                  className="text-danger fw-bold d-block text-decoration-none mb-3"
                >
                  Already have an account?
                </Link>
                <div className="d-flex justify-content-center"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
