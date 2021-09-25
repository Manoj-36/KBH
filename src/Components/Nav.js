import React from "react";
import "../Components/Nav.css";
import Icon from "../pics/icon2.gif";

export default function Nav() {
  return (
    <div className="navbar">
      <input
        id="page-nav-toggle"
        class="main-navigation-toggle"
        type="checkbox"
      />
      <label for="page-nav-toggle">
        <svg class="icon--menu-toggle" viewBox="0 0 60 30">
          <g class="icon-group">
            <g class="icon--menu">
              <path d="M 6 1 L 54 1" />
              <path d="M 6 25 L 54 25" />
              {/* <path d="M 6 30 L 54 30" /> */}
            </g>
            <g class="icon--close">
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </label>

      <nav class="main-navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Mess">Mess</a>
          </li>
          <li>
            <a href="/Photo Gallery">Gallery</a>
          </li>

          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="BH-nva-sec">
        <a href="/">
          <img className="BH-nav-icon" src={Icon} />
        </a>
      </div>
    </div>
  );
}
