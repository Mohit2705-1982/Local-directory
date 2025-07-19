import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data/services";

export default function Category() {
  const { categoryName } = useParams();

  const filteredServices = services.filter(
    (service) => service.category === categoryName
  );

  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <h2 className="text-center mb-4">{categoryName}</h2>
      {filteredServices.length === 0 ? (
        <p>No services available in this category.</p>
      ) : (
        <div className="row">
          {filteredServices.map((service) => (
            <div className="col-md-6 mb-3" key={service.id}>
              <div className="card shadow-sm p-3">
                <h5>{service.name}</h5>
                <p>{service.description}</p>
                <p>
                  📍 {service.address} <br /> 📞 {service.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
