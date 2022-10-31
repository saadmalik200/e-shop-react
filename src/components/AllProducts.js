import React from "react";
import { useContext } from "react";
import Card from "./Card";
import { HomePageContext } from "./Context";
import { useEffect } from "react";
// import { data } from "../e-shop-data";
const AllProducts = () => {
  const { state, dispatch } = useContext(HomePageContext);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://dummyjson.com/products/?skip=0&limit=100"
      );

      const data = await response.json();
      //   console.log(data.products);

      dispatch({ type: "addProducts", payload: data.products });

      //   setProducts([...data.products]);
    };

    getData();
  }, []);

  //   console.log(state);

  return (
    <div className="flex flex-wrap flex-row gap-5 ml-5 justify-center">
      {state.products.map((item, i) => (
        <Card key={i} id={i} product={item} />
      ))}
    </div>
  );
};

export default AllProducts;
