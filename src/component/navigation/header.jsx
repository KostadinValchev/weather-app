import React, { Component } from "react";
import image from "../23793-9-weather-photos_800x800.png";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="header px-3  pb-md-4 mx-auto text-center shadow-lg p-3 mb-5 rounded">
        <img
          className="rounded mx-auto d-block img-fluid"
          src={image}
          alt="Weather"
          width="400"
          height="400"
        />
        <div>
          <p className="lead">
            This weather application provides 5 days weather forecast for The
            city you are looking for
          </p>
          <p>You can click the day to see its hourly weather forecast</p>
        </div>
      </div>
    );
  }
}

export default Header;
