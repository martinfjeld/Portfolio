import React from "react";
import "./difficulty.styles.scss";

function DifficultyElement(props) {
  

 let rows = [];

  for(let i = 0; i < 5; i++){
    rows.push(i < props.difficulty ? <div className="dot filled"></div> : <div className="dot"></div>)
  }

  return (
    <div className="difficulty-level">
      <div className="difficulty-level__container">
        
        {rows}
        
      </div>
      <p>Difficulty</p>
    </div>
  );
}

export default DifficultyElement;
