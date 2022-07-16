import "./App.css";
// import Buttons from "./Buttons";
// import { useState } from "react";


// const numbers = () => {
  // const [rezultat, setRezultat] = useState(0);
function App() {
  return (
    <div className="container">
      <div className="kalkulator">
        <div className="display">
          <h1>0</h1>
        </div>
        <div className="brojevi">
          <button className="numbers">1</button>
          <button className="numbers">2</button>
          <button className="numbers">3</button>
          <button className="numbers">4</button>
          <button className="numbers">5</button>
          <button className="numbers">6</button>
          <button className="numbers">7</button>
          <button className="numbers">8</button>
          <button className="numbers">9</button>
          <button className="numbers">0</button>
        </div>
        <div className="operacije"></div>
      </div>
    </div>
  );
}

export default App;
