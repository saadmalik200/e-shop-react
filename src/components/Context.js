import React, { createContext, useEffect, useReducer } from "react";
import { useState } from "react";

export const HomePageContext = createContext();

const HomePageProvider = ({ children }) => {
  const initialState = {
    cart: [],
    products: [],
    searchText: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "addProducts":
        // console.log(state.products);
        return { ...state, products: [...action.payload] };

      case "addCart":
        return { ...state, cart: [...state.cart, action.payload] };

      case "removeCart":
        const newArr = state.cart.splice(action.payload.key, 1);

        return { ...state, cart: [...state.cart, ...newArr] };

      case "search":
        return { ...state, searchText: action.payload };

      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(state.products);

  return (
    <HomePageContext.Provider value={{ state, dispatch }}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;
