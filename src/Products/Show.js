import React from "react";

import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";

import styles from "./Show.module.scss";
import formatPrice from "./formatPrice";

class Show extends React.Component {
  addToCart = () => {
    this.props.addToCart(this.props.id);
  };

  removeFromCart = () => {
    this.props.removeFromCart(this.props.id);
  };

  renderAddToCartButton() {
    if (this.props.inCart) {
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

  render() {
    const { picture, id, price } = this.props;
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

const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(
    product => product.id.toString() === ownProps.id
  );

  const inCart = state.cart.includes(product);

  return { ...product, inCart: inCart };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    removeFromCart: id => {
      dispatch(removeFromCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
