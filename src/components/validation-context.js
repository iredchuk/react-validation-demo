import React, { useState } from "react";

const ValidationContext = React.createContext();

const ValidationProvider = ({ validator, children }) => {
  const [isValidating, setValidating] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const validate = async values => {
    setValidating(true);
    try {
      const errors = await validator(values);
      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
    } finally {
      setValidating(false);
    }
  };

  return (
    <ValidationContext.Provider
      value={{ validate, isValidating, validationErrors }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export { ValidationContext, ValidationProvider };
