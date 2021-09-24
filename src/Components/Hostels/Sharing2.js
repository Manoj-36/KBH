import React from "react";
import "./blocks.css";
import S from "./img/single.png";
import D from "./img/double.png";
import M from "./img/multi.png";
import K1 from "./hostelpics/26.jpg";
import K2 from "./hostelpics/28.jpg";
import K3 from "./hostelpics/34.jpg";
import K4 from "./hostelpics/4.jpg";
import K5 from "./hostelpics/39.jpg";
import K6 from "./hostelpics/37.jpg";
import K7 from "./hostelpics/19.jpg";

export default function Sharing2() {
  return (
    <div className="Share">
      <h2 className="Share-head">
        <span className="start">|</span>Rooms availabality
      </h2>
      <div class="Share-grid-container">
        <div>
          <img className="Share-img-1" src={S} />
          <img className="Share-img-2" src={D} />
          <img className="Share-img-3" src={M} />

          <p className="Share-r-info">
            One,Two & There Sharing Rooms are there in this block
          </p>
        </div>
      </div>
      <div>
        <p className="Share-info">
          In Kaveri Block the Room Allotment is only for the 2nd & 3rd year
          student and this Block also have room for other staffs and workers
        </p>
      </div>
      <div class="Share-grid2-container">
        <div>
          <img src={K1} alt="Hemavathi hostel" />
        </div>
        <div>
          <img src={K5} alt="Room" />
        </div>
        <div>
          <img src={K3} alt="Wifi & cctv" />
        </div>
        <div>
          <img src={K7} alt="cctv" />
        </div>
        <div>
          <img src={K6} lat="Basket ball court" />
        </div>
        <div>
          <img src={K4} alt="tenis court" />
        </div>
        <div>
          <img src={K2} alt="Floor" />
        </div>
      </div>
    </div>
  );
}
