import React from "react";
import Mh from "../pics/mhostel.jpg";
import Mh1 from "./Hostels/hostelpics/mh1.jpg";

export default function Main1() {
  return (
    <div>
      <div className="M">
        <div className="M-mh">
          <h1 className="M-head">
            <span className="M-s-head">Kalpatharu</span> Boy's
            <span className="M-hh">Hostel</span>
          </h1>
          <p className="M-info">
            <span className="M-i-head">Welcome</span> to <br /> Kalpatharu Boy's
            Hostel with most affordable Rooms
            <br /> comparing to offside the campus
          </p>
          <button className="M-btn">Apply</button>
        </div>
        <div>
          <img className="M-img" src={Mh} />
          <div className="M-c"></div>
        </div>
      </div>
    </div>
  );
}
