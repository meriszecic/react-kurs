import { useEffect, useState } from "react";

const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [nesto, setNesto] = useState(false);

  useEffect(() => {
    console.log("Meris");
  }, [isChecked]);

  useEffect(() => {
    console.log("NESTO");
  }, [nesto]);

  console.log("COMPONENT RERENDERED");
  return (
    <div className={`card ${isChecked ? "checked" : ""}`}>
      <p>{props.title}</p>
      <div>
        <button
          className="check"
          onClick={() => {
            setNesto(!nesto);
          }}
        >
          nesto
        </button>
        <button
          className="check"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          CEKIRAJ
        </button>
        <button className="delete" onClick={props.onDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Card;