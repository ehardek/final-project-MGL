import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login"
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path = "/login" component = {Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
