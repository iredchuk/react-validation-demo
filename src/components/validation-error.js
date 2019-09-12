import React from "react";
import "./validation-error.css";

const ValidationError = ({ error }) =>
  error ? <p className="ValidationError">{error}</p> : null;

export default ValidationError;
