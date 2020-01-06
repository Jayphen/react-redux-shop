import React from "react";

import Product from "./Product";

import styles from "./index.module.scss";

class Products extends React.Component {
  renderProducts() {
    return this.props.products.map(product => (
      <Product key={product.id} {...product} />
    ));
  }

  render() {
    return <div className={styles.products}>{this.renderProducts()}</div>;
  }
}

export default Products;
