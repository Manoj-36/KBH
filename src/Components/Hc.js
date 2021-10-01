import React from "react";
import Hcm from "../pics/hc.jpg";
import Bm from "../pics/bookmark.svg";
import Ms from "../pics/msg.svg";

export default function Hc() {
  return (
    <div>
      <div className="Hc">
        <div>
          <h1 className="Hc-head">
            <span className="start">|</span> Hostel Committee
          </h1>
          <p className="Hc-info">
            These are the Hostle Committee members along with the former
            principal Karibassappa and Warden Dileep and facalities of mess
            committee and security. who are supportive to the students to achive
            in there carrier
          </p>
        </div>
        <div>
          <img className="Hc-img" src={Hcm} />
          <div className="Hc-ib"></div>
        </div>
      </div>
      <div className="Hc-msg">
        <div className="Hc-m-p">
          <img className="Hc-msg-icon1" src={Bm} />
          <h3 className="Hc-msg-principal">Principal's Massage</h3>
          <p>
            "I deem it as a privilege to welcome you to Kalpataru Institute of
            Technology Boy's Hostel, one of the reputed institutes in our state
            being run by Kalpataru Vidya Samsthe, Tiptur. "
          </p>
        </div>
        <div className="Hc-m-p">
          <img className="Hc-msg-icon2" src={Ms} />
          <h3>Warden's Massage</h3>
          <p>
            " I am highly pleased to welcome you to our world of excellence.
            Kalpataru Boy's Hostel is known for its good decoplin and
            achievements in the past years. "
          </p>
        </div>
      </div>
      <a href="/Hostel Committe">
        <button className="Hc-btn">Know More</button>
      </a>
    </div>
  );
}
