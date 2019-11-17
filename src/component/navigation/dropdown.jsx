import React from "react";

const Dropdown = ({ cities, cityName, handleSearchSubmit }) => {
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
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{backgroundColor: "#212529"}}>
        {cities &&
          cities.map(city => {
            if (city !== cityName) {
              return (
                <button
                  key={city}
                  className="dropdown-item"
                  id="dropdown-item"
                  type="button"
                  onClick={() => handleSearchSubmit(city)}
                  style={{
                    background: "#212529",
                    color: "#3498db"
                  }}
                >
                  {city}
                </button>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Dropdown;
