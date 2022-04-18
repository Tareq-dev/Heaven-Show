import React, { useContext, useEffect } from "react";
import { MyService } from "../../App";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [service, setService] = useContext(MyService);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [setService]);
  return (
    <div className="mb-5 service-content">
      <h2 className="text-center mt-3">Our Best Services</h2>
      <div className="d-flex justify-content-center">
      <p className="text-center mb-3 fs-6 service-para">
        I am servicing engaged in as part of a gainful business activity
        cover the detailed on-site presentation.
      </p>
      </div>
      <div className="card-component">
        {service.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
