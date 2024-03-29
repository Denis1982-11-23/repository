import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";


function Header() {

  function fakeLogout(){
    localStorage.removeItem("loggedin")
  }

  return (
    <header>
      <Link to="/" className="site-Logo">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">         
          Login
        </Link>
        <button onClick={fakeLogout}>Log out</button>
      </nav>
    </header>
  );
}

export default Header;
