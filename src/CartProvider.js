import React, { useReducer, useMemo, useContext } from "react";
import productsList from "./productsList";

const CartContext = React.createContext(undefined);
// Here we initialise to an empty array, but you could initialise from
// localStorage or some other persisted store
const initialCart = [];

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const value = useMemo(() => {
    return {
      cart,
      dispatch
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// I'd normally use TypeScript here to type the actions, because switching on a
// string is rather error-prone…
function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD":
      const product = productsList.find(
        product => product.id === +action.payload.id
      );

      if (!product) return cart;
      return [...cart, product];

    case "REMOVE":
      return cart.filter(product => product.id !== +action.payload.id);

    default:
      throw new Error(`Action ${action.type} is not supported by cartReducer`);
  }
}

// Wrap the reducer with a nicer API
export function useCart() {
  const { cart, dispatch } = useContext(CartContext);

  function isInCart(id) {
    return cart.includes(id);
  }

  function add(id) {
    dispatch({ type: "ADD", payload: { id } });
  }

  function remove(id) {
    dispatch({ type: "REMOVE", payload: { id } });
  }

  const count = cart.length;

  return { isInCart, add, remove, cart, count };
}
