import React from "react";
import Form from "./form";

class LoginForm extends Form {
  state = {};
  render() {
    return (
      <form className="box">
        <h1>Login</h1>
        {this.renderInput("text", "username", "Username")}
        {this.renderInput("password", "password", "Password")}
        {this.renderButton("button", "name", "Login", "login")}
      </form>
    );
  }
}

export default LoginForm;
