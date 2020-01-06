import React from "react";
import styles from "./Product.module.scss";
import formatPrice from "./formatPrice";
import { Link } from "@reach/router";

class Product extends React.Component {
  render() {
    const { id, price, picture } = this.props;
    return (
      <div className={styles.product}>
        <div>
          <Link to={`/products/${id}`}>
            <img src={picture} alt={`#${id}`} />
          </Link>
        </div>
        <Link to={`/products/${id}`}>
          Picture #{id} - {formatPrice(price)}
        </Link>
      </div>
    );
  }
}

export default Product;
