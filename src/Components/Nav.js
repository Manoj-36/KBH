import React from "react";
import "../Components/Nav.css";
import Icon from "../pics/icon2.gif";
import Drawer from "./Drawer";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="BH-nva-sec">
        <a href="/KBH">
          <img className="BH-nav-icon" src={Icon} />
        </a>
      </div>
      <div className="navbar-d">
        <Drawer />
      </div>
    </div>
  );
}
