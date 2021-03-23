import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        MyGameLibrary
        <div class = "navbar navbar-dark bg-dark" role = "toolbar" >
        <div class="col text-center">
        <div class = "btn-group"  >
           <button type = "button" class = "btn btn-default" style="background-color: purple;">Search</button>
           <button type = "button" class = "btn btn-default" style="background-color: purple;">My games</button>
           <button type = "button" class = "btn btn-default" style="background-color: purple;">Account</button>
        </div>
        </div>
     </div>
      </a>
    </nav>
  );
}

export default Nav;