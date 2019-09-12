import React from "react";
import "./input-field.css";
import ValidationError from "./validation-error";

const InputField = ({ id, label, value, onValueChange, error }) => (
  <div className="InputField">
    <label className="InputField-label" htmlFor={id}>
      {label}
    </label>
    <div className="InputField-inputContainer">
      <div>
        <input
          className="InputField-input"
          type="text"
          name={id}
          id={id}
          value={value}
          onChange={event => onValueChange(id, event.target.value)}
        />
      </div>
      <ValidationError error={error} />
    </div>
  </div>
);

export default InputField;
