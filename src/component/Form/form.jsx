import React, { Component } from "react";
import Input from "./input";
import Button from "./button";
import "./form.css";

class Form extends Component {
  state = {
    account: { username: "", password: "", confirmPassword: "" }
  };
  
  handleRegister = e => {
    console.log("Register!");
  };

  handleSignIn = e => {
    console.log("Login");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  renderInput = (type, name, placeholder) => {
    return (
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  };
  renderButton = (type, name, value, action) => {
    return (
      <Button
        type={type}
        name={name}
        value={value}
        action={action}
        onSubmit={action === "login" ? this.handleSignIn : this.handleRegister}
      />
    );
  };
}
export default Form;
