import React from "react";
import "./validation.css";
import "./input-field.css";

export default function InputField({ id, label, value, onValueChange, error }) {
  return (
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
        {error && <p className="validation-error">{error}</p>}
      </div>
    </div>
  );
}
