import { Link } from "@reach/router";
import React from "react";
import { useCart } from "../CartProvider";
import icon from "./cart.png";
import styles from "./MenuIcon.module.scss";

function MenuIcon() {
  const { count } = useCart();
  return (
    <div className={styles.container}>
      <Link to="/cart">
        <div>
          <img src={icon} alt="Cart" />
        </div>
      </Link>

      <div className={styles.number}>
        <Link to="/cart">{count}</Link>
      </div>
    </div>
  );
}

export default MenuIcon;
