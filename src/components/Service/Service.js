import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, description, img, price } = service;
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate("/checkout");
  };
  return (
    <div>
      <div className="card-shadow py-2 px-2 rounded-3">
        <img
          style={{ borderRadius: "25px" }}
          className="w-100"
          src={img}
          alt=""
        />
        <div style={{ height: "320px" }}className="px-2">
          <h2 className="mt-2">{name}</h2>
          <p className="mt-2">{description}</p>
          <h3>$ {price}</h3>
          <button
            onClick={() => navigateToDetails(id)}
            className="w-100 bg-warning mt-2 border-0 py-1 fw-bold rounded-3 btn-bg"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
