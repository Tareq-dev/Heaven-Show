import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import NavPage from "../NavPage/NavPage";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  if (sending) {
    return <Loading />;
  }
  return (
    <div>
      <NavPage />
      <div style={{ height: "700px" }} className="App bg-dark">
        <div className="pt-5 pb-5">
          <input
            type="email"
            className="border border-2 py-1 px-3 rounded-3"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-info border-0 py-1"
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            }}
          >
            Reset password
          </button>
          <ToastContainer />
        </div>
        <p>Error : {error ? error : ""}</p>
      </div>
    </div>
  );
};

export default ResetPass;
