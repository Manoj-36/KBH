import React from "react";
import Mi from "./img/mess.png";
import Test from "./img/test.HEIC";

export default function Mess() {
  return (
    <div className="Mess">
      <div className="Mess-h-sec">
        <div className="Mess-head-sec">
          <h2 className="Mess-head">
            Healthy<span className="Mess-hs">Food</span>
          </h2>
          <h2 className="Mess-head2">
            Healthy<span className="Mess-hs">Life</span>
          </h2>
          <p className="Mess-info">
            Welcome to Mess department we only provied 🟢 Veg food, north and
            south indian food is avelable
          </p>
        </div>

        <img className="Mess-icon" src={Mi} />
      </div>
      <div className="Mess-dep">
        <div>
          <h2 className="Mess-d-head">
            <span className="start">|</span>Dividing System
          </h2>
        </div>

        <h2 className="Mess-d-head">
          <span className="start">|</span>Mess Committee
        </h2>
        <img src={Test} />
      </div>
    </div>
  );
}
