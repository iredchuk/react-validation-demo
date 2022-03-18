const delay = timeout =>
  new Promise(resolve => {
    setTimeout(() => resolve(), timeout);
  });

const isPostalCodeValid = async postalCode => {
  await delay(500); // Simulate async validation
  return /^\d{5}$/.test(postalCode);
};

const validateAddress = async ({ postalCode, city }) => {
  const errors = {};

  if (!postalCode) {
    errors["postalCode"] = "Postal code is required";
  } else if (!(await isPostalCodeValid(postalCode))) {
    errors["postalCode"] = "Invalid postal code";
  }

  if (!city) {
    errors["city"] = "City is required";
  }

  return errors;
};

export default validateAddress;
