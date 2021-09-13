import React from "react";
import Footer from "../Footer";
import B1img from "./img/hemavathi.jpg";
import "./blocks.css";

export default function Block1() {
  return (
    <div className="B1">
      <h5 className="B1-head">Hemavathi block</h5>
      <div className="B1-img-sec">
        <img className="B1-img" src={B1img} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
