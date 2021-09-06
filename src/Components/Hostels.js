import React from "react";
import F from "../pics/1st.jpg";
import "../Components/Hostel.css";
import Mh from "../pics/mhostel.jpg";

export default function Hostels() {
  return (
    <div className="H">
      <h2 className="H-main-head">
        <span className="start">|</span>All Hostel Blocks
      </h2>
      <main className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">Hemavathi Block</h2>
            <p className="copy">
              This block only for the 1 st year Students , PU & BSC Students
              also include Lateral Entery Students
            </p>
            <button className="btn"> View More</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Kaveri Block</h2>
            <p className="copy">
              This BLock only for 2nd, 3rd, diplomo students and others..
            </p>
            <button className="btn">View More</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">MCA Block</h2>
            <p className="copy">
              This Block includes the Final Year, MBA & 3rd Year Students and
              Mess in the ground Floor
            </p>
            <button className="btn">View More</button>
          </div>
        </div>
      </main>
    </div>
  );
}