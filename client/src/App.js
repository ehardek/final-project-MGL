import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
