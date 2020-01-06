import React from "react";

import Product from "./Product";

import styles from "./index.module.scss";

function Products({ products }) {
  return (
    <div className={styles.products}>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
