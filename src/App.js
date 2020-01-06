import React from "react";
import { Router, Link } from "@reach/router";

import "./App.scss";

import productsList from "./productsList";
import Products from "./Products";
import Product from "./Products/Show";
import Cart from "./Cart";

import CartMenuIcon from "./Cart/MenuIcon";

class App extends React.Component {
  state = {
    cart: []
  };
  addToCart = id => {
    const product = productsList.find(product => product.id === Number(id));

    this.setState({ cart: this.state.cart.concat(product) });
  };

  removeFromCart = id => {
    const cart = this.state.cart.filter(product => product.id !== Number(id));

    this.setState({ cart: cart });
  };

  inCart = id => {
    return !!this.state.cart.find(product => product.id === Number(id));
  };

  removeFromCart(id) {}
  render() {
    const cart = this.state.cart;
    return (
      <div>
        <menu className="topbar">
          <Link to="/">
            <h1>My Shop</h1>
          </Link>
          <CartMenuIcon number={cart.length}></CartMenuIcon>
        </menu>
        <Router>
          <Products path="/" products={productsList} />
          <Product
            path="/products/:id"
            inCart={this.inCart}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />

          <Cart
            path="/cart"
            items={cart}
            removeFromCart={this.removeFromCart}
          />
        </Router>
      </div>
    );
  }
}

export default App;
