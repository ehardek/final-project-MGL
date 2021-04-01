import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg">
      <a className="navbar-brand" style={{color:"black"}} href="/">
        MyGameLibrary
        <div class = "navbar navbar-dark bg-dark" role = "toolbar" >
        <div class="col text-center">
        <div class="btn-group"  >
           <a class="btn btn-default" style={{background: 'purple'}} href="/search">Search</a>
           <a class="btn btn-default" style={{background: 'purple'}} href="/library">My games</a>
           {/* <a class="btn btn-default" style={{background: 'purple'}}>Account</button> */}
        </div>
        </div>
       </div>
      </a>
    </nav>
  );
}

export default Nav;