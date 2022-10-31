import HomePageProvider from "./components/Context";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
// import { data } from "./e-shop-data";
import { HomePageContext } from "./components/Context";
import { useContext } from "react";
import AllProducts from "./components/AllProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import SearchProduct from "./components/SearchProduct";
import ProductPage from "./components/SingleProductPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/searchproduct" element={<SearchProduct />} />
          <Route path="*" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
