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
        // console.log("allProducts", state.products);
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
        console.log("Same", same);

        if (same > -1) {
          console.log("state cart id", state.cart[0].id);
          console.log("action payload id", action.payload.product.id);

          state.cart[same].quantity =
            state.cart[same].quantity + action.payload.counter;
          return {
            ...state,
            cart: [...state.cart],
          };
        }

        if (action.payload.counter > 1) {
          console.log("id counter is", action.payload.product.id);
          const newProduct = {
            ...action.payload.product,
            quantity: state.cart[same].quantity + action.payload.counter,
          };

          return { ...state, cart: [...state.cart, newProduct] };
        } else {
          return { ...state, cart: [...state.cart, action.payload.product] };
        }

      case "removeCart":
        const oldArr = [...state.cart];
        oldArr.splice(action.payload.key, 1);
        // console.log(newArr);
        return { ...state, cart: [...oldArr] };

      case "search":
        return { ...state, searchText: action.payload };

      case "counterPlus":
        const oldCartPlus = [...state.cart];

        oldCartPlus[action.payload].quantity =
          oldCartPlus[action.payload].quantity + 1;
        // console.log("After ", oldCartPlus);
        return { ...state, cart: [...oldCartPlus] };
      // return { ...state, counter: state.counter + 1 };

      case "counterMinus":
        const oldCartMinus = [...state.cart];
        // console.log(action.payload);

        oldCartMinus[action.payload].quantity--;
        // console.log(oldCartMinus);
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
