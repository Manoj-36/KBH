import React from "react";
import Hcm from "../pics/hc.jpg";

export default function Hc() {
  return (
    <div className="Hc">
      <div>
        <h1 className="Hc-head">
          <span className="start">|</span> Hostel Committee
        </h1>
        <p className="Hc-info">
          These are the Hostle Committee members along with the former principal
          Karibassappa and Warden Dileep and facalities of mess committee and
          security. who are supportive to the students to achive in there
          carrier
        </p>
      </div>
      <div>
        <img className="Hc-img" src={Hcm} />
        <div className="Hc-ib"></div>
      </div>
    </div>
  );
}
