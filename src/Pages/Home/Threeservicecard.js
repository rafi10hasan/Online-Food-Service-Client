import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Threecard from "./Threecard";

const Threeservicecard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://cloud-kitchen-tau.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="text-center fw-bold">My Services</h1>
      <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-center align-items-center">
        {services.slice(0, 3).map((service) => (
          <Threecard key={service._id} service={service}></Threecard>
        ))}
        <div className="text-center">
          <Link as to="/services">
            <Button variant="primary" className="mt-5">
              see all services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Threeservicecard;
