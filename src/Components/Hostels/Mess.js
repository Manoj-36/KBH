import React from "react";
import Mi from "./img/mess.png";

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
        <h2>Mess Committee</h2>
      </div>
    </div>
  );
}
