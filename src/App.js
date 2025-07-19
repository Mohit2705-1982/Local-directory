import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import CategoryCard from "./components/CategoryCard";
import Category from "./pages/Category";

export default function App() {
  const categoryImages = {
    "Plumber": "plumber.png",
    "Electrician": "electrician.png",
    "Carpenter": "carpenter.png",
    "Milk man": "milkman.png",
    "Fitness Trainer": "fitness_trainer.png",
    "Appliance Repair": "appliance_repair.png",
    "Painter": "painter.png",
    "builder": "builder.png",
    "AC Mechanic": "ac_mechanic.png",
    "Pest Control": "pest_control.png",
    "Interior Designer": "interior_designer.png",
    "Car Mechanic": "car_mechanic.png",
    "Bike Mechanic": "bike_mechanic.png",
    "Car Wash": "car_wash.png",
    "Tailor": "tailor.png",
    "Beautician": "beautician.png",
    "Barber": "barber.png",
    "garments": "garments.png",
    "Photographer": "photographer.png",
    "Tutor": "tutor.png",
    "Mobile accessories": "mobile_accessories.png",
    "Mobile repair": "mobile_repair.png",
    "Taxi service": "taxi_service.png",
    "RO Technician": "ro_technician.png",
    "CCTV Installer": "cctv_installer.png",
    "Lawyer": "lawyer.png",
  };

  const [searchClicked, setSearchClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = Object.entries(categoryImages).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchClicked={setSearchClicked}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ marginTop: "90px" }} className="container">
              <div className="row">
                {searchClicked && filteredCategories.length === 0 ? (
                  <p className="text-center mt-5">
                    🚫 No services found for your search.
                  </p>
                ) : (
                  filteredCategories.map(([name, filename]) => (
                    <div
                      className="col-md-4 mb-4 d-flex justify-content-center"
                      key={name}
                    >
                      <CategoryCard name={name} image={filename} />
                    </div>
                  ))
                )}
              </div>
            </div>
          }
        />
        <Route path="/Category/:categoryName" element={<Category />} />
      </Routes>
    </Router>
  );
}
