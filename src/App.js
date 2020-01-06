import React from "react";
import { Router, Link } from "@reach/router";

import "./App.scss";

import productsList from "./productsList";
import Products from "./Products";
import Product from "./Products/Show";
import Cart from "./Cart";
import { CartProvider } from "./CartProvider";

import CartMenuIcon from "./Cart/MenuIcon";

function App() {
  return (
    <CartProvider>
      <div>
        <menu className="topbar">
          <Link to="/">
            <h1>My Shop</h1>
          </Link>
          <CartMenuIcon />
        </menu>
        <Router>
          <Products path="/" products={productsList} />
          <Product path="/products/:id" />

          <Cart path="/cart" />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
