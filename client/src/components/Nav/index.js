import React from "react";
import "./style.css";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg">
      <div className="navbar-brand" href="/">
        <h1>MyGameLibrary</h1>
        <div className = "navbar navbar-dark bg-dark" role = "toolbar" >
        <div className="col text-center">
        <div className="btn-group"  >
           <a className="btn btn-default" href="/search">Search</a>
           <a className="btn btn-default" href="/library">My games</a>
           {/* <a className="btn btn-default" style={{background: 'purple'}}>Account</button> */}
        </div>
        </div>
       </div>
      </div>
    </nav>
  );
}

export default Nav;