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
          <p>Single bed Sharing is avelabale</p>
        </div>
        <div>
          <img className="Share-img-2" src={D} />
          <p>Double bed Sharing is avelabale</p>
        </div>
        <div>
          <img className="Share-img-3" src={M} />
          <p>
            Large rooms also avelabale for
            <br /> 3 t0 4 bed Sharing is avelabale
          </p>
        </div>
      </div>
    </div>
  );
}
