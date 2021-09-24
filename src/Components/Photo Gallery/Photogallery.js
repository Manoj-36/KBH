import React from "react";
import "./Photogallery.css";
import I1 from "./img/1.jpeg";
import I2 from "./img/2.jpeg";
import I3 from "./img/3.jpeg";
import I4 from "./img/4.jpeg";
import I5 from "./img/5.jpeg";
import I6 from "./img/6.jpeg";

export default function Photogallery() {
  return (
    <div className="PhotoG">
      <h1></h1>
      <div class="PhotoG-grid-container">
        <div class="PhotoG-grid-item PG-item1">
          <img src={I1} />
        </div>
        <div class="PhotoG-grid-item PG-item2">
          <img src={I2} />
        </div>
        <div class="PhotoG-grid-item PG-item3">
          {" "}
          <img src={I3} />
        </div>
        <div class="PhotoG-grid-item PG-item4">
          {" "}
          <img src={I4} />
        </div>
        <div class="PhotoG-grid-item PG-item5">
          {" "}
          <img src={I5} />
        </div>
        <div class="PhotoG-grid-item PG-item6">
          {" "}
          <img src={I6} />
        </div>
        <div class="PhotoG-grid-item PG-item7">
          {" "}
          <img src={I1} />
        </div>
        <div class="PhotoG-grid-item PG-item8">
          {" "}
          <img src={I1} />
        </div>
      </div>
    </div>
  );
}
