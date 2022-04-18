import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div style={{ height: "500px" }} className="header">
      <div className="content bg-text">
        <h1 className="text-white">
          Best Place Waiting For Your Best Tour Guide
        </h1>
        <p className="text-white">
          My duties depend on your location and employer. If you
          are self-employed, you will usually give tours of publicly accessible
          travel destinations like national parks or nature attractions.
        </p>
      </div>
    </div>
  );
};

export default Header;
