// src/pages/ServiceDetail.js
import { useParams } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) return <p>Service not found</p>;

  return (
    <div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <p><strong>Phone:</strong> {service.phone}</p>
      <p><strong>Address:</strong> {service.address}</p>
    </div>
  );
}
