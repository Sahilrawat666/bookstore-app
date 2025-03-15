import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="card bg-base-100 w-80 m-3 p-7 shadow-xl hover:scale-105 duration-200  cursor-pointer ">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold rounded-box dpx-2 text-pink-500">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline cursor-pointer  ">
              ${item.price}
            </div>
            <div className="badge badge-outline px-3 py-1 border[2px] hover:bg-pink-500 hover:text-white duration-200 ">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
