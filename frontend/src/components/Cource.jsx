import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Cource() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  md:px-20 px-4">
        <div className="mt-28   text-center">
          <h1 className="text-2xl  md:teat-4xl mt-9">
            We are delighted to have you{" "}
            <span className=" text-pink-500">here...!</span>
          </h1>
          <p className=" mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            iste illo sequi dicta praesentium, officiis, officia, debitis
            nostrum eligendi magnam voluptas iusto. Doloribus accusamus eaque
            nam vitae consequuntur odit quis.
          </p>
          <Link to="/">
            <button className=" bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6 cursor-pointer">
              {" "}
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cource;
