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
    <div className="mb-5">
      <h2 className="text-center mt-5">Our Best Services</h2>
      <p className="text-center mb-5">
        Lorem ipsum dolor ipsum dolor ipsum dolor sit amet consectetur,
        adipisicing elit.
      </p>
      <div className="card-component">
        {service.slice(0, 3).map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
