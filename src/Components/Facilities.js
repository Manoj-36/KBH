import React from "react";
import Wifi from "../pics/facilities/wf.svg";
import Finger1 from "../pics/facilities/fp.svg";
import Washing from "../pics/facilities/wm.svg";
import Hotw from "../pics/facilities/hw.svg";
import Cctv from "../pics/facilities/cctv.svg";

export default function Facilities() {
  return (
    <div className="FA" id="FA1">
      <h2 className="FA-head">
        <span className="start">|</span>Facilities
      </h2>
      <div class="FA-grid-container">
        <div>
          <img className="FA-F-icons-wifi" src={Wifi} />
          <p className="FA-F-info">Free wifi All over the Hostel 24x7</p>
        </div>
        <div>
          <img className="FA-F-icons-finger" src={Finger1} />
          <p className="FA-F-info">
            Biometric authentication for
            <br /> attendance
          </p>
        </div>
        <div>
          <img className="FA-F-icons-washing" src={Washing} />
          <p className="FA-F-info">Loundry service avibale in MCA Block</p>
        </div>
        <div>
          <img className="FA-F-icons-hotw" src={Hotw} />
          <p className="FA-F-info">Hot water facilitie is avilabale</p>
        </div>
        <div className="FA-i5">
          <img className="FA-F-icons-cctv" src={Cctv} />
          <p className="FA-F-info">Hostel under CCTV servelence</p>
        </div>

        <a className="FA-link" href="/KBH/Ffacilities">
          <p className="FA-i6">More →</p>
        </a>
      </div>
    </div>
  );
}
