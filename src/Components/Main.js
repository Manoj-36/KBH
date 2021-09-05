import React from "react";
import Nav from "./Nav";
import Mhostel from "../pics/mhostel.jpg";

export default function Main() {
  return (
    <div className="BH">
      <Nav />
      <div className="BH-main">
        {/* <img src={Mhostel} /> */}
        <h3 className="BH-sub-head">WELCOME TO </h3>
        <h1 className="BH-main-head">KIT BOYS HOSTEL</h1>
      </div>
      <div className="BH-btn">
        <button className="BH-btn-a" title="Room Booking">
          Apply
        </button>
      </div>
    </div>
  );
}
