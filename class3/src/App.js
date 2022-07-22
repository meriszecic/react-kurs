import { useState } from "react";
import "./App.css";

const App = () => {
  let formValue = { name: "", email: "", lastName: "" };
  const [value, setValue] = useState({
    name: "",
    email: "",
    lastName: "",
  });

  return (
    <div className="container">
      <input
        name="text"
        placeholder="First name"
        onChange={(e) => {
          formValue.name = e.target.value;
        }}
      ></input>
      <input
        name="text"
        placeholder="Last name"
        onChange={(e) => {
          formValue.lastName = e.target.value;
        }}
      ></input>
      <input
        name="email"
        placeholder="Email"
        onChange={(e) => {
          formValue.email = e.target.value;
        }}
      ></input>
      <button
        onClick={() => {
          if (formValue.name && formValue.email && formValue.lastName) {
            setValue(formValue);
          } else {
            console.log("Please fill all the ");
          }
        }}
      >
        Register
      </button>
      <div>
        <h1>{value.name}</h1> 
        <h1>{value.lastName}</h1> 
        <h1>{value.email}</h1> 
      </div>
    </div>
  );
};

export default App;
