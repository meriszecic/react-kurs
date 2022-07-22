import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [facts, setFacts] = useState([]);
  const [novaVar, setNovaVar] = useState(false);

  function getFacts() {
    fetch("https://api.github.com/users/dzemildupljak")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setFacts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getFacts();
    console.log("PRVI USEEFFCT");
  }, []);

  useEffect(() => {
    console.log("DRUGI USEEFFCT");
  }, [novaVar]);

  return (
    <div>
      {/* {facts.map((el) => {
        return <h1>{el.fact}</h1>;
      })} */}
    </div>
  );
};

export default App;