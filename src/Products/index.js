import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Products);
