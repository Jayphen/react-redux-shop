import React from "react";
import { Link } from "@reach/router";

import Item from "./Item";
import { useCart } from "../CartProvider";

function Cart() {
  const { count, cart } = useCart();
  const emptyCart = count < 1;

  return (
    <div>
      <h2>Your Cart</h2>
      {emptyCart && (
        <div>
          You have nothing in your cart! You should{" "}
          <Link to="/">find something you like!</Link>
        </div>
      )}

      {cart.map(item => (
        <Item {...item} />
      ))}
    </div>
  );
}

export default Cart;
