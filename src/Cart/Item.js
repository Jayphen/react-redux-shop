import React from "react";
import { connect } from "react-redux";

import styles from "./Item.module.scss";

import { removeFromCart } from "../actions";
import formatPrice from "../Products/formatPrice";

class Item extends React.Component {
  removeFromCart = () => {
    this.props.removeFromCart(this.props.id);
  };

  render() {
    const { id, picture, price } = this.props;

    return (
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={picture} alt={id} />
        </div>
        <div>
          <h3>Picture #{id}</h3>
          <p>{formatPrice(price)}</p>

          <button
            className={styles.removeFromCart}
            onClick={this.removeFromCart}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => {
      dispatch(removeFromCart(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Item);
