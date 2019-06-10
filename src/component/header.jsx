import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return (
            <header>
  <div className="bg-dark collapse" id="navbarHeader" >
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About</h4>
          <p className="text-muted">This Weather application is easy to use and provides forecasts for your </p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><a href="#_" className="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container d-flex justify-content-between">
      <a href="#_" className="navbar-brand d-flex align-items-center">
        <strong>Weather</strong>
      </a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
         );
    }
}
 
export default Header;