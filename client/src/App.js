import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/newuser" component = {NewUser}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
