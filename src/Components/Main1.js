import React from "react";
import Mh from "../pics/mhostel.jpg";

export default function Main1() {
  return (
    <div>
      <div className="M">
        <div className="M-mh">
          <h1 className="M-head">
            KIT Boys<span className="M-hh">Hostel</span>
          </h1>
          <p className="M-info">
            <span className="M-i-head">Welcome</span> to <br /> Kalpatharu
            institute of Technology Boys Hostel with most affordable Rooms
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