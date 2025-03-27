import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="card mx-auto bg-base-100 w-63 mb-4 mt-4 shadow-xl hover:scale-105  cursor-pointer dark:bg-slate-900 dark:border-1  ">
        <figure className="max-w-full">
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body duration-200 ">
          <h2 className="card-title font-bold rounded-box dpx-2 ">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge border-slate-400  dark:text-white dark:border-white dark:bg-slate-900 cursor-pointer  ">
              ${item.price}
            </div>
            <div className="badge  px-3 py-1 border[2px] border-slate-400 dark:text-white dark:border-white dark:bg-slate-900 hover:bg-pink-500 hover:text-white duration-200 ">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
