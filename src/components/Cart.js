import React from "react";
import { useContext } from "react";
import { HomePageContext } from "./Context";
import { useState } from "react";
import CardCart from "./CardCart";
const Cart = () => {
  const { state } = useContext(HomePageContext);
  return (
    <div className="flex flex-wrap flex-row gap-5 ml-5 justify-center">
      <CardCart />
    </div>
  );
};

export default Cart;
