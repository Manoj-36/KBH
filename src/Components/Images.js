import React from "react";
import "./Images.css";
import Kh from "../Components/Hostels/img/kh.jpeg";
import Gpic from "./Hostels/img/gpic.jpeg";
import Hostelday from "./Hostels/img/hostelday.jpeg";
import G3 from "./Hostels/img/g3.mp4";

export default function Images() {
  return (
    <div className="Images">
      <div class="slider">
        <h2 className="Images-head">
          <span className="start">|</span>Events Images
        </h2>
        {/* <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a> */}

        <div class="slides">
          <div id="slide-1">
            <img className="Images-slid-img" src={Kh} />
          </div>
          <div id="slide-2">
            <img className="Images-slid-img" src={Gpic} />
          </div>
          <div id="slide-3">
            <img className="Images-slid-img" src={Hostelday} />
          </div>
          <div id="slide-4">
            <img src={G3} />
          </div>
          <div id="slide-5">5</div>
        </div>
      </div>
    </div>
  );
}
