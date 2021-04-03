import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg">
      <div className="navbar-brand" style={{color:"black"}} href="/">
        MyGameLibrary
        <div className = "navbar navbar-dark bg-dark" role = "toolbar" >
        <div className="col text-center">
        <div className="btn-group"  >
           <a className="btn btn-default" style={{background: 'purple'}} href="/search">Search</a>
           <a className="btn btn-default" style={{background: 'purple'}} href="/library">My games</a>
           {/* <a className="btn btn-default" style={{background: 'purple'}}>Account</button> */}
        </div>
        </div>
       </div>
      </div>
    </nav>
  );
}

export default Nav;