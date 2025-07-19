import React from "react";

export default function Header({
  searchTerm,
  setSearchTerm,
  setSearchClicked,
}) {
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5 mb-3">
        Neemrana Area Local Services
      </h1>
      <form className="d-flex justify-content-center" role="search">
        <input
          className="form-control me-2 "
          style={{
            width: "300px",
            outline: "none",
            border: "#5f5a5aff solid 2px",
            borderRadius: "5px",
            boxShadow: "none",
          }}
          type="search"
          placeholder="Search for services"
          aria-label="Search"
          onChange={(e) => {setSearchTerm(e.target.value);setSearchClicked(false);} }
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={(e) => {
          e.preventDefault(); // Prevent page refresh
          setSearchClicked(true); // Mark that user searched
        }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
