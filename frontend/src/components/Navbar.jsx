import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <label htmlFor="" className="logo">
          Book Store
        </label>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/course">Cource</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>

          <li>
            <input type="text" placeholder="search" className="search" />
          </li>
          <li>
            <i className="night">
              <FontAwesomeIcon icon={faMoon} />
            </i>
          </li>
          <span className="my-1.5">
            <a
              className="bg-black px-1.5 py-2 rounded-md text-white "
              href="/login"
            >
              Login
            </a>
          </span>
        </ul>
        <i className="menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </i>
        <ul className={isMenuOpen ? "menu-links active" : "menu-links "}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/course">Cource</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
