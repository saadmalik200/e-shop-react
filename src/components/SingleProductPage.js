import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import SingleProductCard from "./SingleProductCard";
import CardMedia from "@mui/material/CardMedia";
import { HomePageContext } from "./Context";

const ProductPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(HomePageContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      // console.log("data =", data);
      data.quantity = 1;
      // data.products.forEach((item) => (item.quantity = 1));
      // setProduct({ ...data });

      dispatch({ type: "addSingleProduct", payload: data });
    };
    getData();
  }, []);
  // console.log(state.singleProduct);
  return (
    <div className="flex justify-center items-center h-screen">
      <SingleProductCard />
    </div>
  );
};

export default ProductPage;
