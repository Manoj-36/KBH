import React from "react";
import Footer from "../Footer";
import B1img from "./img/hemavathi.jpg";
import H2 from "./img/h2.jpg";
import "./blocks.css";
import "./Slid.css";
import Nav from "../Nav";

export default function Block1() {
  return (
    <div className="B1">
      <h5 className="B1-head">Hemavathi block</h5>
      {/* <div classNameName="B1-img-sec">
        <img classNameName="B1-img" src={B1img} />
      </div> */}
      {/* <div className="Share-slid">
        <div className="carousel"> */}
      {/* <div className="carousel-title">my CAT carousel</div> */}
      {/* <div className="carousel-hint">
            Use arrow keys <i className="fas fa-angle-left"></i> or{" "}
            <i className="fas fa-angle-right"></i> to scroll.
          </div> */}
      {/* <div className="carousel-num">
            <i>1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
          </div> */}
      {/* <div className="carousel-stage" id="carousel">
            <div className="carousel-item">
              <div className="carousel-content">
                <img
                  className="carousel-image"
                  src={B1img}
                  alt="Hemavathi front view"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <img className="carousel-image" src={H2} alt="Side view" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <img
                  className="carousel-image"
                  src="https://cdn2.thecatapi.com/images/ckc.jpg"
                  alt="cat"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <img
                  className="carousel-image"
                  src="https://cdn2.thecatapi.com/images/779.jpg"
                  alt="cat"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <img
                  className="carousel-image"
                  src="https://cdn2.thecatapi.com/images/dp8.jpg"
                  alt="cat"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
