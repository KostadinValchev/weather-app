import React from "react";

const Button = ({ type, name, value, action, onSubmit }) => {
  return <input type={type} name={name} value={value} onClick={onSubmit} />;
};

export default Button;
