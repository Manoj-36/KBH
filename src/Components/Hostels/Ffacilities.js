import React from "react";
import F1 from "./hostelpics/11.jpg";
import F2 from "./hostelpics/6.jpg";
import F3 from "./hostelpics/28.jpg";
import F4 from "./hostelpics/30.jpg";

export default function Ffacilities() {
  return (
    <div className="FF">
      <h2 className="FF-head">
        <span className="start">|</span>All Facilities{" "}
      </h2>
      <div>
        <div class="Share-grid2-container">
          <div>
            <img src={F1} alt="Hemavathi hostel" />
          </div>
          <div>
            <img src={F2} alt="Room" />
          </div>
          <div>
            <img src={F3} alt="Wifi & cctv" />
          </div>
          <div>
            <img src={F4} alt="cctv" />
          </div>
          {/* <div>
            <img src={K6} lat="Basket ball court" />
          </div>
          <div>
            <img src={K4} alt="tenis court" />
          </div>
          <div>
            <img src={K2} alt="Floor" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
