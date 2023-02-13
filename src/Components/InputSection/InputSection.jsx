import "./InputSection.scss";
import React from "react";

const InputSection = ({ label, placeholder, type }) => {
  return (
    <div className="inputContainer">
      <label for={label}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputSection;
