import React from "react";
import "./App.css";
import { ValidationProvider } from "./components/validation-context";
import Form from "./components/form";
import validateForm from "./services/validate-form";

const App = () => (
  <div className="App">
    <header className="App-header">
      <ValidationProvider validator={validateForm}>
        <Form initialPostalCode="" initialCity="Munich"></Form>
      </ValidationProvider>
    </header>
  </div>
);

export default App;
