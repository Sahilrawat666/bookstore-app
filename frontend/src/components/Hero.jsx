import React from "react";
import "./Hero.css";
import books from "../images/books.jpg";

function Hero() {
  return (
    <>
      <div className="herosection">
        <div className="herotext">
          <h2>
            Hello, Welcome here to learn something <span>new everyday!!!</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            laboriosam tenetur dolores quas architecto explicabo fugit,
            accusantium vitae hic quidem natus ad. Labore deleniti fugiat
            eveniet vel ipsam. Sed, culpa.
          </p>
          <input
            type="text"
            placeholder="Enter your email to login"
            className="email"
          />
          <button className="secondary"> Secondary</button>
        </div>
        <div className="booksimg">
          <img src={books} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
