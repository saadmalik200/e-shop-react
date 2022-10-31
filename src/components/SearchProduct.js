import React, { useContext } from "react";
import { HomePageContext } from "./Context";
import Card from "./Card";

const SearchProduct = () => {
  const { state } = useContext(HomePageContext);
  // console.log("Search Product", state.products);

  const result = state.products.filter((item) =>
    item.title.toLowerCase().includes(state.searchText.toLowerCase())
  );

  return (
    <div className="flex flex-wrap flex-row gap-5 ml-5">
      {result.map((item, i) => (
        <Card key={i} product={item} />
      ))}
    </div>
  );
};

export default SearchProduct;
