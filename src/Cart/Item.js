import React from "react";

import styles from "./Item.module.scss";

import formatPrice from "../Products/formatPrice";
import { useCart } from "../CartProvider";

function Item({ id, picture, price }) {
  const { remove } = useCart();

  function removeFromCart() {
    remove(id);
  }

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={picture} alt={id} />
      </div>
      <div>
        <h3>Picture #{id}</h3>
        <p>{formatPrice(price)}</p>

        <button className={styles.removeFromCart} onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
