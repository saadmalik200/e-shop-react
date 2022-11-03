import React, { createContext, useEffect, useReducer } from "react";
import { useState } from "react";

export const HomePageContext = createContext();

const HomePageProvider = ({ children }) => {
  const initialState = {
    cart: [],
    products: [],
    singleProduct: {},
    searchText: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "addProducts":
        return { ...state, products: [...action.payload] };

      case "addSingleProduct":
        return {
          ...state,
          singleProduct: action.payload,
        };

      case "addCart":
        const same = state.cart.findIndex(
          (item) => item.id === action.payload.product.id
        );

        if (same > -1) {
          state.cart[same].quantity =
            state.cart[same].quantity + action.payload.counter;
          return {
            ...state,
            cart: [...state.cart],
          };
        }

        if (action.payload.counter > 1) {
          const newProduct = {
            ...action.payload.product,
            quantity: action.payload.counter,
          };

          return { ...state, cart: [...state.cart, newProduct] };
        } else {
          return { ...state, cart: [...state.cart, action.payload.product] };
        }

      case "removeCart":
        const oldArr = [...state.cart];
        oldArr.splice(action.payload.key, 1);
        return { ...state, cart: [...oldArr] };

      case "search":
        return { ...state, searchText: action.payload };

      case "counterPlus":
        const oldCartPlus = [...state.cart];

        oldCartPlus[action.payload].quantity =
          oldCartPlus[action.payload].quantity + 1;
        return { ...state, cart: [...oldCartPlus] };

      case "counterMinus":
        const oldCartMinus = [...state.cart];

        oldCartMinus[action.payload].quantity--;
        return { ...state, cart: oldCartMinus };

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
