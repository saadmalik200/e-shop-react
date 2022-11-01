import React from "react";
import Card from "./CardBestSeller";

const CardContainer = (props) => {
  if (props.title === "Best Seller") {
    const bestSeller = props.products.filter((item) => item.rating > 4.9);

    return (
      <div className=" border-4  mt-[5rem] ml-14 ">
        <p className=" text-[3rem] pl-4 pt-4">{props.title}</p>
        <div className="flex gap-5 pb-8 overflow-x-scroll   ">
          {bestSeller.map((item, i) => (
            <Card key={i} product={item} />
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
        <div className="flex gap-5 pb-8 overflow-x-scroll   ">
          {bestSeller.map((item, i) => (
            <Card key={i} product={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default CardContainer;
