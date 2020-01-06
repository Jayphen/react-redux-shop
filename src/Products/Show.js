import React, { useMemo } from "react";

import productsList from "../productsList";

import styles from "./Show.module.scss";
import formatPrice from "./formatPrice";
import { useCart } from "../CartProvider";

function Show({ id }) {
  const { isInCart } = useCart();
  const item = productsList.find(product => product.id === +id);

  const itemIsInCart = useMemo(() => isInCart(item), [isInCart, item]);

  if (!item) return null;

  return (
    <div>
      <h2>Picture #{id}</h2>
      <div>
        <img src={item.picture} alt={`#${id}`} />
      </div>
      {formatPrice(item.price)}
      {itemIsInCart ? <RemoveFromCart id={id} /> : <AddToCart id={id} />}
    </div>
  );
}

function AddToCart({ id }) {
  const { add } = useCart();

  return (
    <button
      onClick={() => add(id)}
      className={`${styles.addToCart} ${styles.cartButton}`}
    >
      Add to Cart
    </button>
  );
}

function RemoveFromCart({ id }) {
  const { remove } = useCart();

  return (
    <button
      onClick={() => remove(id)}
      className={`${styles.removeFromCart} ${styles.cartButton}`}
    >
      Remove from Cart
    </button>
  );
}

export default Show;
