import { useState } from "react";

const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`card ${isChecked ? "checked" : ""}`}>
      <p>{props.title}</p>
      <div>
        <button
          className="check"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          Check
        </button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default Card