import React, { useState } from "react";
import NavPage from "../NavPage/NavPage";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error] = useState("");

  const handleCheckout = (event) => {
    event.preventDefault();
    const checkout = { name, email, phone, address };
    toast("Thanks For Checkingout!");
  };
  return (
    <div>
      <NavPage />
      <div className=" checkout">
        <div className="d-flex justify-content-center">
          <div className="form-container py-2 mt-5 pt-5">
            <div>
              <h3 className="form-title">Checkout</h3>
              <form onSubmit={handleCheckout}>
                <div className="input-group">
                  <input
                    placeholder="Your Name"
                    onBlur={(event) => setName(event.target.value)}
                    type="text"
                    name="name"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    value={user?.email}
                    readOnly
                    type="email"
                    name="email"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    placeholder="Your Address"
                    onBlur={(event) => setAddress(event.target.value)}
                    type="text"
                    name="address"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    placeholder="Your Phone"
                    onBlur={(event) => setPhone(event.target.value)}
                    type="text"
                    name="phone"
                    id=""
                    required
                  />
                </div>
                <p className="text-red-600 mb-1 mx-3">{error}</p>
                <input
                  onClick={handleCheckout}
                  className="form-submit"
                  type="submit"
                  value="Confirm Checkout"
                />
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
