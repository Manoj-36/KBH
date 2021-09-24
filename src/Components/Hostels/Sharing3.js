import React from "react";
import "./blocks.css";
import S from "./img/single.png";
import D from "./img/double.png";
import M from "./img/multi.png";
import MCA1 from "./hostelpics/22.jpg";
import MCA2 from "./hostelpics/36.jpg";
import MCA3 from "./hostelpics/34.jpg";
import MCA4 from "./hostelpics/38.jpg";
import MCA5 from "./hostelpics/39.jpg";
import MCA6 from "./hostelpics/37.jpg";
import MCA7 from "./hostelpics/30.jpg";

export default function Sharing3() {
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
            One,Two and Three Sharing Rooms are three in this block
          </p>
        </div>
      </div>
      <div>
        <p className="Share-info">
          In MCA Block the Room Allotment is only for the final years & MBA
          student and this Block also have Mess in the ground floor
        </p>
      </div>
      <div class="Share-grid2-container">
        <div>
          <img src={MCA1} alt="Hemavathi hostel" />
        </div>
        <div>
          <img src={MCA5} alt="Room" />
        </div>
        <div>
          <img src={MCA3} alt="Wifi & cctv" />
        </div>
        <div>
          <img src={MCA7} alt="cctv" />
        </div>
        <div>
          <img src={MCA6} lat="Basket ball court" />
        </div>
        <div>
          <img src={MCA4} alt="tenis court" />
        </div>
        <div>
          <img src={MCA2} alt="Floor" />
        </div>
      </div>
    </div>
  );
}
