import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <input
        id="page-nav-toggle"
        class="main-navigation-toggle"
        type="checkbox"
      />
      <label for="page-nav-toggle">
        <svg class="icon--menu-toggle" viewBox="0 0 60 30">
          <g class="icon-group">
            <g class="icon--menu">
              <path d="M 6 15 L 54 15" />
              <path d="M 6 40 L 54 40" />
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
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
          <li>
            <a href="#0">Dance</a>
          </li>
        </ul>
      </nav>
      <div>
        <h1 className="BH-nav-icon"></h1>
      </div>
    </div>
  );
}
