import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <ul>
            <li>about us</li>
            <li>contact</li>
            <li>jobs</li>
            <li>press kit</li>
          </ul>

          <label className="footer-icons"></label>

          <p>copyright c 2025 - All right reserved by ACME industries Ltd</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
