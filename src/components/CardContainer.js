import React, { useState } from "react";
import CardBestSeller from "./CardBestSeller";

const CardContainer = (props) => {
  const [view, setView] = useState(false);

  if (props.title === "Best Seller") {
    const bestSeller = props.products.filter((item) => item.rating > 4.9);

    return (
      <div className=" border-4  mt-[5rem] ml-14 ">
        <p className=" text-[3rem] pl-4 pt-4">{props.title}</p>
        <div className="flex gap-5 pb-8 overflow-x-auto  pl-4 ">
          {bestSeller.map((item, i) => (
            <CardBestSeller key={i} id={i} product={item} />
          ))}
        </div>
      </div>
    );
  }

  if (props.title === "Most Popular") {
    const bestSeller = props.products.filter((item) => item.price > 800);

    return (
      <div className=" border-4  mt-[2rem] ml-14 ">
        <p className=" text-[3rem] pl-4 pt-4">{props.title}</p>
        <div className="flex gap-5 pb-8 overflow-x-auto  pl-4 ">
          {bestSeller.map((item, i) => (
            <CardBestSeller key={i} id={i} product={item} />
          ))}
        </div>
      </div>
    );
  }
  if (props.title === "All Products") {
    // const bestSeller = props.products.filter((item) => item.price > 800);

    return (
      <div className=" border-4  mt-[2rem] ml-14 pl-4  ">
        <div className="flex items-center justify-between">
          <p className=" text-[3rem] pl-4 pt-4">{props.title}</p>
          <button
            onClick={() => setView(!view)}
            className="mr-[4rem] bg-gray-200 text-[1.25rem]"
          >
            Change view
          </button>
        </div>
        <div
          className={`flex gap-5 pb-8 ${
            view ? "flex-wrap justify-center" : " overflow-x-auto"
          }   `}
        >
          {props.products.map((item, i) => (
            <CardBestSeller key={i} id={i} view={view} product={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default CardContainer;
