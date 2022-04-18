import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-info d-flex justify-content-center align-center px-2 rounded mx-2 text-black border-0"
        >
          <img
            className="mx-2"
            style={{ width: "30px" }}
            src="https://i.ibb.co/8gL10p2/g.png"
            alt=""
          />
          <p className="m-0">Sign In With Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
