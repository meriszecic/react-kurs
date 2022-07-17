import "./App.css";
import { useState } from "react";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState([]);
  let a = "";
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="unos">
        <input
          type="text"
          onChange={(e) => {
            a = e.target.value;
          }}
        />
        <button
          onClick={() => {
            setData([...data, a]);
          }}
        >
          Submit
        </button>
      </div>
      {data.map((el) => {
        return <Card title={el} />;
      })}
    </div>
  );
};

export default App;
