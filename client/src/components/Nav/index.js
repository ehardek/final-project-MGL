import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        MyGameLibrary
<<<<<<< HEAD
        <div class = "navbar navbar-dark bg-dark" role = "toolbar" >
        <div class="col text-center">
        <div class = "btn-group"  >
           <button type = "button" class = "btn btn-default" style="background-color: purple;">Search</button>
           <button type = "button" class = "btn btn-default" style="background-color: purple;">My games</button>
           <button type = "button" class = "btn btn-default" style="background-color: purple;">Account</button>
        </div>
        </div>
     </div>
=======

        <div class = "navbar navbar-dark bg-dark" role = "toolbar" >
        <div class="col text-center">
        <div class = "btn-group"  >
           <button type = "button" class = "btn btn-default" style={{background: 'purple'}}>Search</button>
           <button type = "button" class = "btn btn-default" style={{background: 'purple'}}>My games</button>
           <button type = "button" class = "btn btn-default" style={{background: 'purple'}}>Account</button>
        </div>
        </div>
       </div>
>>>>>>> c601d763abb543918d704b65be04a95fb058031f
      </a>
    </nav>
  );
}

export default Nav;