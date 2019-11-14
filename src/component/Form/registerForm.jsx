import React from "react";
import Form from "./form";

class RegisterForm extends Form {
  state = {};
  render() {
    return (
      <form className="box">
        <h1>Register</h1>
        {this.renderInput("text", "username", "Username")}
        {this.renderInput("password", "password", "Password")}
        {this.renderInput("password", "repeatPassword", "Confirm Password")}
        {this.renderButton("submit", "", "Register")}
      </form>
    );
  }
}

export default RegisterForm;
