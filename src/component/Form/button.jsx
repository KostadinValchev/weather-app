import React from "react";

const Button = ({ type, name, value, onClick }) => {
    console.log(name)
  return <input type={type} name={name} value={value} onClick={onClick}/>;
};

export default Button;
