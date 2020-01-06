import React from "react";

import productsList from "../productsList";

import styles from "./Show.module.scss";
import formatPrice from "./formatPrice";

class Show extends React.Component {
  state = {
    price: null
  };
  addToCart = () => {
    this.props.addToCart(this.props.id);
  };

  removeFromCart = () => {
    this.props.removeFromCart(this.props.id);
  };

  renderAddToCartButton() {
    if (this.props.inCart(this.props.id)) {
      return (
        <button
          onClick={this.removeFromCart}
          className={`${styles.removeFromCart} ${styles.cartButton}`}
        >
          Remove from Cart
        </button>
      );
    }

    return (
      <button
        onClick={this.addToCart}
        className={`${styles.addToCart} ${styles.cartButton}`}
      >
        Add to Cart
      </button>
    );
  }

  componentDidMount() {
    const product = productsList.find(
      product => product.id.toString() === this.props.id
    );

    this.setState({ ...product });
  }

  render() {
    const { id } = this.props;
    const { picture, price } = this.state;
    return (
      <div>
        <h2>Picture #{id}</h2>
        <div>
          <img src={picture} alt={`#${id}`} />
        </div>
        {formatPrice(price)}

        {this.renderAddToCartButton()}
      </div>
    );
  }
}

export default Show;
