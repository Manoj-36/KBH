import React from "react";
import Nav from "./Nav";
import Mhostel from "../pics/mhostel.jpg";

export default function Main() {
  return (
    <div className="BH">
      <Nav />
      <div className="BH-main">
        {/* <img src={Mhostel} /> */}
        <h1 className="BH-main-head">KIT BOYS HOSTEL</h1>
      </div>
    </div>
  );
}
