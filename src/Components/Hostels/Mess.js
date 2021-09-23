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
            south indian food is availabale
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
          <div className="Mess-ds">
            <p>
              <span className="start1">⟫</span>In our Hostel the working system
              of the mess is <u>Dividing system </u>
              which is each student gets the monthly fee amount based on ↓
            </p>

            <ul>
              <li>Rations-vegitable's Total amount per month → (R)</li>
              <li>
                Electric city bill of the month will be Divided separatly → (E)
              </li>
              <li>Number of meals per month (3 meals per day) → (A)</li>
              <li>Total fee per day | (individual) = (R / A) → (I)</li>
              <li>
                {" "}
                So for an individual student the mess fee will be = I x NO.of
                days present in the hostel
              </li>
            </ul>
            <p>
              <span className="start1">⟫</span>
              So this way every student will get their mess bill pre month
              through this system
            </p>
          </div>
        </div>

        <h2 className="Mess-d-head">
          <span className="start">|</span>Mess Committee{" "}
          <span className="Mess-d-head1">[Changed on monthly basis]</span>
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
