import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div style={{ height: "500px" }} className="header">
      <div className="content top-5 bg-text">
        <h2 className="text-info">
          Best Place Waiting For Your Best Tour Guide
        </h2>
        <p className="text-info">
          A tour guide's duties depend on their location and employer. If they
          are self-employed, they will usually give tours of publicly accessible
          travel destinations like national parks or nature attractions. Those
          who are employed by a visitor's bureau or corporation offer tours of
          cities, industrial locations, or other points of interest.
        </p>
      </div>
    </div>
  );
};

export default Header;
