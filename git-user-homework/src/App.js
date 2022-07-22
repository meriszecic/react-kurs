import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const [facts, setFacts] = useState([]);

  function getFacts() {
    fetch("https://api.github.com/users/meriszecic")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <div className="App">
      <input name="search">Pretrazite GitHub profil</input>
    </div>
  );
};

export default App;
