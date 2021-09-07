import React from "react";
import Icon from "../pics/icon2.gif";

export default function Footer() {
  return (
    <div className="Fo">
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#8ed1fcff"></stop>
            <stop offset="95%" stop-color="#4df54d"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,300 0,300 C 144.96428571428572,348.7142857142857 289.92857142857144,397.42857142857144 421,401 C 552.0714285714286,404.57142857142856 669.2500000000001,363 778,318 C 886.7499999999999,273 987.0714285714284,224.57142857142858 1096,221 C 1204.9285714285716,217.42857142857142 1322.4642857142858,258.7142857142857 1440,300 C 1440,300 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150"
        ></path>
      </svg>
      <div class="Fo-grid-container">
        <div>
          <img className="Fo-img" src={Icon} />
          <div className="Fo-f-info">
            <p>
              Kalpatharu Boys Hostel
              <br />
              Tiptur-572 201, Tumkur District <br />
              Karnataka, India{" "}
            </p>
            <p>Phone No : 7483368980</p>
            <p>Mobile.NO : 7483368980</p>
            <p>Email : bjmanoj7@gmail.com</p>
          </div>
        </div>
        <div>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Alumni </p>
          <p>Photo Gallery</p>
        </div>
        <div>
          <p>Hemavathi Block</p>
          <p>Kaveri Block</p>
          <p>MCA Block</p>
          <p>Mess</p>
          <p>Mess Community</p>
        </div>
        <div>
          <p>Admission</p>
          <p>Events</p>
          <p>Placement Info.</p>
        </div>
      </div>
      <div className="Fo-df">
        <hr className="Fo-l" />
        <p>
          {" "}
          © CopyRight 2021 | KIT Boys Hostel | Developed By Manoj & Sudhanva
        </p>
      </div>
    </div>
  );
}
