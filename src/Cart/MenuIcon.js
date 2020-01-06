import React from "react";
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

export default MenuIcon;
