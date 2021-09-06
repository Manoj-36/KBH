import "./Components/Style.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Hostels from "./Components/Hostels";
import Hwarden from "./Components/Hwarden";
import Rules from "./Components/Rules";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
            <Hostels />
            <Rules />
            <Hwarden />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Warden">
            <Hwarden />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
