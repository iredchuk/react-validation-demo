import React, { useState, useContext } from "react";
import InputField from "./input-field";
import { ValidationContext } from "./validation-context";

const Form = ({ initialPostalCode, initialCity }) => {
  const { validate, isValidating, validationErrors } = useContext(
    ValidationContext
  );

  const [address, setAddress] = useState({
    postalCode: initialPostalCode,
    city: initialCity
  });

  const handleValueChange = (key, value) => {
    setAddress({ ...address, ...{ [key]: value } });
  };

  const handleButtonClick = async () => {
    if (isValidating) {
      return;
    }

    const isValid = await validate(address);

    if (isValid) {
      alert(`Submitted: ZIP=${address.postalCode} City=${address.city}`);
    }
  };

  return (
    <div>
      <InputField
        id="postalCode"
        label="ZIP"
        value={address.postalCode}
        onValueChange={handleValueChange}
        error={validationErrors["postalCode"]}
      />
      <InputField
        id="city"
        label="City"
        value={address.city}
        onValueChange={handleValueChange}
        error={validationErrors["city"]}
      />
      <button type="button" onClick={handleButtonClick} disabled={isValidating}>
        Submit
      </button>
    </div>
  );
};

export default Form;
