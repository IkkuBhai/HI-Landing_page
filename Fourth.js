import React from "react";
import "./App.css";
import { asian1 } from "./images";
import { asian2 } from "./images";

function Fourth() {
  return (
    <div className="nurture">

     
        <div className="nurture-01">
          <img src={asian1} />
        </div>

        <div className="nurture-02">
          <h4>
            Nurture the talent for selfenhancement to land their dream position
            in career.
          </h4>
        </div>

        <div className="nurture-03">
          <img src={asian2} />
        </div>
     
    </div>
  );
}

export default Fourth;
