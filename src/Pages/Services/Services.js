import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("services");
  useEffect(() => {
    fetch("https://cloud-kitchen-tau.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5">All services</h1>
      <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-center align-items-center g-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
