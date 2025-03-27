import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

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

          <label className="footer-icons flex gap-4 ">
            <FaFacebookSquare className="font-bold size-5 cursor-pointer " />
            <FaTwitterSquare className="font-bold size-5 cursor-pointer" />
            <FaInstagramSquare className="font-bold size-5 cursor-pointer" />
          </label>
          {/* <FontAwesomeIcon icon={faHouse} /> */}
          {/* <FontAwesomeIcon icon={faDog} /> */}
          {/* <FontAwesomeIcon icon={faDragon} /> */}

          <p>copyright c 2025 - All right reserved by ACME industries Ltd</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
