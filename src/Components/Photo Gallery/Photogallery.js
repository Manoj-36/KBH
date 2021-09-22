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
    <div>
      <div className="row">
        <div className="column">
          <img src={I1} />
          <img src={I2} />
          <img src={I3} />
          <img src={I4} />
          <img src={I5} />
          <img src={I6} />
        </div>
        <div className="column">
          <img src={I1} />
          <img src={I2} />
          <img src={I3} />
          <img src={I4} />
          <img src={I5} />
          <img src={I6} />
        </div>
        <div className="column">
          <img src="/w3images/wedding.jpg" />
          <img src="/w3images/rocks.jpg" />
          <img src="/w3images/falls2.jpg" />
          <img src="/w3images/paris.jpg" />
          <img src="/w3images/nature.jpg" />
          <img src="/w3images/mist.jpg" />
          <img src="/w3images/paris.jpg" />
        </div>
        <div className="column">
          <img src="/w3images/underwater.jpg" />
          <img src="/w3images/ocean.jpg" />
          <img src="/w3images/wedding.jpg" />
          <img src="/w3images/mountainskies.jpg" />
          <img src="/w3images/rocks.jpg" />
          <img src="/w3images/underwater.jpg" />
        </div>
      </div>
    </div>
  );
}
