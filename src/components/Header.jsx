import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ searchHandler }) => {
  return (
    <header className="container py-2">
      <div
        className="d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Eventura Logo"
            className="img-fluid rounded-circle border border-2 shadow-lg"
            style={{
              maxWidth: "70px",
              backgroundColor: "#5B4B8A", 
              borderColor: "#00C2CB", 
              padding: "5px",
            }}
          />
        </div>

        <div className="input-group shawow-lg" style={{ maxWidth: "65%" }}>
          <span
            className="input-group-text border-0 text-white"
            style={{ backgroundColor: "#00C2CB" }} 
          >
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control shadow-lg"
            style={{color: "#2D2D2D"}}
            placeholder="Search Events by Title or Tags"
            onChange={(e) => searchHandler(e.target.value)}
          />
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
