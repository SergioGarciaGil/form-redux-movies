import React from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../../logoHenry.png";
import "../NavBar/NavBar.css";
import Logo from "../../logoHenry.png";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <img
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            Nav
            {/* <NavLink to="/favs">Favoritas</NavLink> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
