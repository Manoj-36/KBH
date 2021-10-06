import React, { Component, useEffect, useState } from "react";
import "./Components/Style.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Facilities from "./Components/Facilities";
import Hostels from "./Components/Hostels";
import Hwarden from "./Components/Hwarden";
import Rules from "./Components/Rules";
import Main1 from "./Components/Main1";
import Footer from "./Components/Footer";
import Hc from "./Components/Hc";
import Block1 from "./Components/Hostels/Block1";
import Sharing from "./Components/Hostels/sharing";
import Mess from "./Components/Hostels/Mess";
import Images from "./Components/Images";
import Sharing2 from "./Components/Hostels/Sharing2";
import Messpic from "./Components/Hostels/Mess-pic";
import Block2 from "./Components/Hostels/Block2";
import Block3 from "./Components/Hostels/Block3";
import Sharing3 from "./Components/Hostels/Sharing3";
import Photogallery from "./Components/Photo Gallery/Photogallery";
import Contact from "./Components/Contact";
import Ffacilities from "./Components/Hostels/Ffacilities";
import PUBG from "./pics/pubg.gif";
import Hostelcommittee from "./Components/Hostelcommittee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="load">
          <div className="load-icon">
            <img className="load-img" src={PUBG} />
            <h2 className="load-name">KBH</h2>
            <button className="load-info">MOBILE</button>
          </div>
        </div>
      ) : (
        <div>
          <Nav />
          <Router>
            <Switch>
              <Route exact path="/KBH">
                <Main1 />
                <Hc />
                <Hostels />
                <Facilities />
                <Rules />
                <Images />
                <Footer />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/Hemavathi-block">
                <Block1 />
                <Sharing />
                <Facilities />
                <Footer />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/Kaveri-block">
                <Block2 />
                <Sharing2 />
                <Facilities />
                <Footer />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/MCA-block">
                <Block3 />
                <Sharing3 />
                <Facilities />
                <Footer />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/Mess">
                <Mess />
                <Messpic />
                <Footer />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/Photo Gallery">
                <Photogallery />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/Contact">
                <Contact />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/Ffacilities">
                <Ffacilities />
                <Footer />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/KBH/Hostel Committe">
                <Hostelcommittee />
                <Footer />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
