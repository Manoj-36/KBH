import React from "react";
import H1 from "../pics/hemavathi.jpg";
import "../Hostels/block.css";

export default function Hemavathi() {
  return (
    <div className="H1">
      <h1 className="H1-head">Hemavathi Block</h1>
      <div className="H1-img-sec">
        <img className="H1-img" src={H1} />
      </div>
    </div>
  );
}
