import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

const searchHandler = () => {
  console.log("...in search");
};

const Header = () => {
    const [showFilter, setShowFilter] = useState(false)

const toggleFilter = () => {
    setShowFilter(!showFilter)
}

  return (
    <header>
      <div className="container py-2" style={{backgroundColor: '#d4d2cc'}}>
        <div className="p-3 d-flex justify-content-between align-items-center" style={{color: '#2e4042'}}>
            <img src="/Eventura_Logo.png" alt="Eventura Logo" className="img-fluid rounded-circle shadow" style={{maxWidth: '80px'}}/>
            <div className="d-flex align-items-center position-relative">
                <button className="border-0 bg-transparent p-2" onClick={toggleFilter}>
                    <FaFilter className="fs-5" />
                </button>
                {showFilter && (
                <select className="position-absolute mt-2 w-auto border rounded shadow bg-white p-1">
                    <option>Event Type</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both</option>
                </select>
                )}
            </div>            
        </div>
        <div className="container d-flex input-group" onClick={searchHandler}>
            <span className="border-right-0 input-group-text">
                <FaMagnifyingGlass />
            </span>
            <input type="text" placeholder="Search by title and tags" className="form-control border-left-0 input-group-text"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
