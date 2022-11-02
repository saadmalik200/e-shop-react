import React from "react";
import { useContext } from "react";
import { HomePageContext } from "./Context";
import { useState } from "react";
import CardCart from "./CardCart";
const Cart = () => {
  const { state } = useContext(HomePageContext);
  // const [counter, setCounter] = useState(1);
  return (
    <div className="flex flex-wrap flex-row gap-5 ml-5 justify-center">
      {/* {state.cart.length === 0 ? (
        <div className="mt-[8rem] text-[3rem] ">Cart is Empty</div>
      ) : (
        state.cart.map((item, i) => <CardCart key={i} id={i} product={item} />)
      )}{" "} */}

      <CardCart />
    </div>
  );
};

export default Cart;
