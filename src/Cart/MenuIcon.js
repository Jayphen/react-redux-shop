import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import icon from "./cart.png";
import styles from "./MenuIcon.module.scss";

class MenuIcon extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/cart">
          <div>
            <img src={icon} alt="Cart" />
          </div>
        </Link>

        <div className={styles.number}>
          <Link to="/cart">{this.props.number}</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.cart.length
  };
};

export default connect(mapStateToProps)(MenuIcon);
