import React from "react";
import M1 from "../Hostels/img/m1.jpg";
import M2 from "../Hostels/img/m2.jpg";
import M3 from "../Hostels/img/m3.jpg";
import M4 from "../Hostels/img/m4.jpg";
import M5 from "../Hostels/img/m5.jpg";
import M7 from "../Hostels/img/m7.jpg";
import "./blocks.css";

export default function Messpic() {
  return (
    <div className="Messpic">
      <div class="row">
        <div className="column">
          <img src={M1} alt="principal in mess" />
        </div>
        <div className="column">
          <img src={M2} alt="Mess Store room" />
        </div>
        <div className="column">
          <img src={M3} alt="Store Room" />
        </div>
        <div className="column">
          <img src={M4} alt="Mess hall" />
        </div>
        <div className="column">
          <img src={M5} alt="Mess hall" />
        </div>
        <div className="column">
          <img src={M7} alt="Students in Mess" />
        </div>
      </div>
    </div>
  );
}
