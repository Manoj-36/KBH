import React from "react";
import "./Images.css";
import Kh from "../Components/Hostels/img/kh.jpeg";
import Gpic from "./Hostels/img/gpic.jpeg";
import Hostelday from "./Hostels/img/hostelday.jpeg";
import G3 from "./Hostels/img/g2.mp4";
import G4 from "../Components/Hostels/img/gdance.mp4";

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
            <video width="400" controls>
              <source src={G4} type="video/mp4" />
              <source src={G4} type="video/ogg" />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <div id="slide-5">
            <video width="400" controls>
              <source src={G3} type="video/mp4" />
              <source src={G3} type="video/ogg" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
