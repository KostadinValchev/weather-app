import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dropdown.css";

const Dropdown = ({ cities, cityName, handleSearchSubmit, onRemoveCity }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-success dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ marginRight: "70px", padding: "10px 20px" }}
      >
        {cityName}
      </button>
      <div
        className="dropdown-menu"
        aria-labelledby="dropdownMenu2"
        style={{ backgroundColor: "#212529" }}
      >
        {cities &&
          cities.map((city, index) => {
            if (city !== cityName) {
              return (
                <div className="city-drop-down" key={city}>
                  <button
                    key={city}
                    className="dropdown-item"
                    id="dropdown-item1"
                    type="button"
                    onClick={() => handleSearchSubmit(city)}
                    style={{
                      background: "#212529",
                      color: "#3498db",
                      cursor: "pointer"
                    }}
                  >
                    {city}
                  </button>
                  <button
                    key={index}
                    className="dropdown-item"
                    id="dropdown-item"
                    type="button"
                    style={{
                      background: "#212529",
                      color: "#3498db"
                    }}
                  >
                    <FontAwesomeIcon
                      icon="minus-square"
                      className="city-minus-icon"
                      onClick={() => onRemoveCity(city)}
                    />
                  </button>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Dropdown;
