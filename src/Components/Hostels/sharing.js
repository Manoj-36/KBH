import React from "react";
import "./blocks.css";
import S from "./img/single.png";
import D from "./img/double.png";
import M from "./img/multi.png";

export default function Sharing() {
  return (
    <div className="Share">
      <h2 className="Share-head">
        <span className="start">|</span>Rooms avelabality
      </h2>
      <div class="Share-grid-container">
        <div>
          <img className="Share-img-1" src={S} />
          <img className="Share-img-2" src={D} />
          <img className="Share-img-3" src={M} />

          <p className="Share-r-info">
            One,Two & There Share Rooms are there in this block
          </p>
        </div>
      </div>
      <div>
        <p className="Share-info">
          In Hemavathi Block the Room Alotment is only for the First
          <span className="Share-s">*</span> year student and this Block also
          have room for PU & BSC students from kalpatharu administration in
          Tiptur
        </p>
      </div>
    </div>
  );
}
