import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/newuser" component = {NewUser}/>
          <Route exact path = "/search" component = {Search}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
