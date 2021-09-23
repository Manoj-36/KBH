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
        <div>
          <h2 className="Mess-d-head">
            <span className="start">|</span>Mess Menu
          </h2>
          <table className="Mess-menu">
            <tr>
              <th>Weak.Days</th>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Night</th>
            </tr>
            <hr className="Mess-menu-line" />
            <tr>
              <th>Monday</th>
              <td>Pulav</td>
              <td>Chapathi Meals</td>
              <td>Chapathi Meals</td>
            </tr>
            <hr className="Mess-menu-line" />
            <tr>
              <th>Tuesday</th>
              <td>Edli vada</td>
              <td>Chapathi Meals</td>
              <td>Puri Meals</td>
            </tr>
            <hr className="Mess-menu-line" />
            <tr>
              <th>Wednesday</th>
              <td>Chithranna,bread jam</td>
              <td>Chapathi Meals</td>
              <td>Chapathi Meals</td>
            </tr>
            <hr className="Mess-menu-line" />
            <tr>
              <th>Thursday</th>
              <td>Bisibele-bath or Avalakki</td>
              <td>Chapathi Meal</td>
              <td>Special meals(Sweet's)</td>
            </tr>
            <hr className="Mess-menu-line" />
            <tr>
              <th>Friday</th>
              <td>Thatte Edli</td>
              <td>Chapathi Meals</td>
              <td>Chapathi Meals</td>
            </tr>
            <hr className="Mess-menu-line" />
            <tr>
              <th>Saturday</th>
              <td>Tomato-bath</td>
              <td>Rice Meals</td>
              <td>Chapathi Meals</td>
            </tr>
            <hr className="Mess-menu-line" />
            <tr>
              <th>Sunday</th>
              <td>Dosa</td>
              <td>Special meals</td>
              <td>Uppitu Or Meals</td>
            </tr>
          </table>
        </div>
        <div>
          <h2 className="Mess-d-head">
            <span className="start">|</span>Dividing System
          </h2>
        </div>

        <h2 className="Mess-d-head">
          <span className="start">|</span>Mess Committee
        </h2>
        <div className="Mess-c-students">
          <span>Baratha</span>
          <span className="start1">|</span>
          <span>Sharatha</span>
          <span className="start1">|</span>
          <span>Akhil</span>
          <span className="start1">|</span>
          <span>Shashank</span>
          <span className="start1">|</span>
          <span>Premgowda</span>
          <span className="start1">|</span>
          <span>Prashanth</span>
        </div>
      </div>
    </div>
  );
}
