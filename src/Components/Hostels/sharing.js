import React from "react";
import "./blocks.css";
import S from "./img/single.png";
import D from "./img/double.png";
import M from "./img/multi.png";
import H1 from "./hostelpics/2.jpg";
import H2 from "./hostelpics/4.jpg";
import H3 from "./hostelpics/6.jpg";
import H4 from "./hostelpics/11.jpg";
import H5 from "./hostelpics/14.jpg";
import H6 from "./hostelpics/16.jpg";
import H7 from "./hostelpics/32.jpg";

export default function Sharing() {
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
            One,Two and three Sharing Rooms are three in this block
          </p>
        </div>
      </div>
      <div>
        <p className="Share-info">
          In Hemavathi Block the Room Allotment is only for the First
          <span className="Share-s">*</span> year student and this Block also
          have room for PU & BSC students from kalpatharu administration in
          Tiptur
        </p>
      </div>
      <div class="Share-grid2-container">
        <div>
          <img src={H1} alt="Hemavathi hostel" />
        </div>
        <div>
          <img src={H7} alt="Room" />
        </div>
        <div>
          <img src={H3} alt="Wifi & cctv" />
        </div>
        <div>
          <img src={H4} alt="cctv" />
        </div>
        <div>
          <img src={H5} lat="Basket ball court" />
        </div>
        <div>
          <img src={H6} alt="tenis court" />
        </div>
        <div>
          <img src={H2} alt="Floor" />
        </div>
      </div>
    </div>
  );
}
