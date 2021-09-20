import React from "react";
import "./Images.css";

export default function Images() {
  return (
    <div className="Images">
      <div class="slider">
        <h2 className="Images-head">
          <span className="start">|</span>Events Images
        </h2>
        {/* <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a> */}

        <div class="slides">
          <div id="slide-1">1</div>
          <div id="slide-2">2</div>
          <div id="slide-3">3</div>
          <div id="slide-4">4</div>
          <div id="slide-5">5</div>
        </div>
      </div>
    </div>
  );
}
