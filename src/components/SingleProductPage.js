import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SingleProductCard from "./SingleProductCard";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      //   console.log(data);

      setProduct({ ...data });
    };
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <SingleProductCard product={product} />
    </div>
  );
};

export default ProductPage;
