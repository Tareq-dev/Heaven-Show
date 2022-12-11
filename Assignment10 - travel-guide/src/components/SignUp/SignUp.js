import React, { useState } from "react";
import NavPage from "../NavPage/NavPage";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import SocialLogin from "./../SocialLogin/SocialLogin";
import Footer from "../Footer/Footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const Register = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (user) {
      navigate("/");
    }
    createUserWithEmailAndPassword(email, password).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <NavPage />
      <div className="signup">
        <div>
          <div className="d-flex justify-content-center py-5">
            <div className="signup-blur px-5 py-5">
              <h2 className="text-center">Sign Up</h2>
              <form onSubmit={Register}>
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
                <p className="text-danger mt-3 mb-2">{error}</p>
                <div className="d-flex justify-content-center">
                  <input
                    value="Register"
                    type="submit"
                    className="mt-2 border-0 fw-bold rounded bg-info"
                  ></input>
                </div>
                <Link
                  to="/login"
                  className="text-danger fw-bold d-block text-decoration-none mb-3"
                >
                  Already have an account?
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

export default SignUp;
