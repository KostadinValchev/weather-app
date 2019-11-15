import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm"
        style={{ backgroundColor: "#212529" }}
      >
        <h5 className="my-0 mr-md-auto font-weight-normal text-light">
          Yourweather
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-light" href="/">
            Menu 1
          </a>
          <a className="p-2 text-light" href="/">
            Menu 2
          </a>
          <a className="p-2 text-light" href="/">
          Menu 3
          </a>
        </nav>
        <a
          className="btn btn-outline-success"
          href="#/"
          style={{ marginRight: "10px" }}
        >
          Sign up
        </a>
        <a className="btn btn-outline-success" href="#/">
          Register
        </a>
      </div>
    );
  }
}

export default Navigation;
