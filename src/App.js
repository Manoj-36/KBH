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
import Hemavathi from "./Hostels/Hemavathi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main1 />
            <Rules />
            <Hc />
            <Hostels />
            <Facilities />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Warden">
            <Hwarden />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Hemavathi-block">
            <Hemavathi />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
