import React from "react";
import "./App.css";
import { ValidationProvider } from "./components/validation-context";
import AddressForm from "./components/address-form";
import validateAddress from "./services/validate-address";

const App = () => (
  <div className="App">
    <header className="App-header">
      <ValidationProvider validator={validateAddress}>
        <AddressForm initialPostalCode="" initialCity="Munich"></AddressForm>
      </ValidationProvider>
    </header>
  </div>
);

export default App;
