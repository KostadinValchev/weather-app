import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

class Navigation extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm"
        style={{ backgroundColor: "#212529" }}
      >
        <h5 className="my-0 mr-md-auto font-weight-normal text-light">
          <Link to="/" id="appLogo">
            Yourweather
          </Link>
        </h5>
        {/* <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-light" href="/">
            Menu 1
          </a>
          <a className="p-2 text-light" href="/">
            Menu 2
          </a>
        </nav> */}
        {this.props.cityName && (
          <Dropdown
            cities={this.props.cities}
            cityName={this.props.cityName}
            handleSearchSubmit={this.props.handleSearchSubmit}
            onRemoveCity={this.props.removeCity}
          />
        )}
        {/* <button
          className="btn btn-outline-success"
          style={{ marginRight: "10px" }}
          href="#/"
        >
          <Link to="/signin" id="btnRegNav">
            Sign up
          </Link>
        </button>
        <button className="btn btn-outline-success" href="#/">
          <Link to="/register" id="btnRegNav">
            Register
          </Link>
        </button> */}
      </div>
    );
  }
}

export default Navigation;
