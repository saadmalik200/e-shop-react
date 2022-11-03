import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

import HomePageProvider from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HomePageProvider>
    <App />
  </HomePageProvider>
);
