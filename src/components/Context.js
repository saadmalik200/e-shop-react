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
        console.log("allProducts", state.products);
        return { ...state, products: [...action.payload] };

      case "addSingleProduct":
        return {
          ...state,
          singleProduct: action.payload,
        };

      case "addCart":
        if (state.cart.includes(action.payload.product)) {
          const findIndex = state.cart.findIndex(
            (item) => item.id === action.payload.product.id
          );

          state.cart[findIndex].quantity = state.cart[findIndex].quantity + 1;
          return {
            ...state,
            cart: [...state.cart],
          };
        }
        if (action.payload.counter > 1) {
          // console.log("id counter is", action.payload.product.id);

          // const findIndex = state.cart.findIndex(
          //   (item) => item.id === action.payload.id
          // );
          // console.log("Index is", findIndex);
          // console.log(`Counter part`, state.cart);
          // const oldCart = [...state.cart];
          // oldCart[action.payload.id].quantity = action.payload.counter;
          return {
            ...state,
            cart: [...state.cart, action.payload.counter],
          };
        } else {
          return { ...state, cart: [...state.cart, action.payload.product] };
        }

      case "removeCart":
        const newArr = state.cart.splice(action.payload.key, 1);
        console.log(newArr);
        return { ...state, cart: [...state.cart, ...newArr] };

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
