import React from "react";
import Form from "./form";

class Button extends Form {
  state = {};
  render() {
    return (
      <form className="box">
        <h1>Login</h1>
        {this.renderInput("text", "Username", "Username")}
        {this.renderInput("password", "password", "Password")}
        {this.renderButton("submit", "name", "Login")}
      </form>
    );
  }
}

export default Button;
