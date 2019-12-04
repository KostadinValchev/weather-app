import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>Oop! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <a href="/">Go back</a>
    </div>
  );
};

export default NotFound;
