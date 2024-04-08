import React, { useState } from "react";
import "./Search.css";

export default function SearchBox({ setSearchTerm }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setSearchTerm(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    // Update the searchTerm state using the prop function
    setSearchTerm(searchTerm);
  };

  return (
    <div className="wrapper">
      <div className="search_box">
        <div className="dropdown">
          <div className="default_option" onClick={toggleDropdown}>
            {selectedOption}
          </div>
          <ul className={isDropdownOpen ? "active" : ""}>
            <li onClick={() => handleOptionClick("All")}>All</li>
            <li onClick={() => handleOptionClick("ST")}>ST DOMAIN</li>
            <li onClick={() => handleOptionClick("CLOUD")}>CLOUD DOMAIN</li>
            <li onClick={() => handleOptionClick("MACHINE")}>MACHINE LEARNING</li>
            <li onClick={() => handleOptionClick("AR")}>AR AND VR</li>
          </ul>
        </div>
        <div className="search_field">
          <input type="text" className="input" placeholder="Search"  onChange={handleSearchInputChange} />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}
