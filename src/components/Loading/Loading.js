import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "500px" }}
      className="w-100 d-flex align-items-center justify-content-center"
    >
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Loading;
