import { createStore } from "redux";

const products = [
  {
    id: 1,
    picture: "https://picsum.photos/id/1/500",
    price: 10
  },
  {
    id: 2,
    picture: "https://picsum.photos/id/10/500",
    price: 20
  },
  {
    id: 3,
    picture: "https://picsum.photos/id/100/500",
    price: 30
  },
  {
    id: 4,
    picture: "https://picsum.photos/id/1000/500",
    price: 40
  },
  {
    id: 5,
    picture: "https://picsum.photos/id/99/500",
    price: 50
  },
  {
    id: 6,
    picture: "https://picsum.photos/id/990/500",
    price: 60
  }
];

const initialState = { products: products, cart: [products[0]] };

const reducer = (state = initialState, action) => {
  let newState = {};

  console.group(action.type);
  console.log("Action", action);
  console.log("Original state", state);

  switch (action.type) {
    case "ADD_TO_CART":
      const product = state.products.find(product => product.id === action.id);

      newState = { ...state, cart: state.cart.concat(product) };
      break;
    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter(product => product.id !== action.id);

      newState = { ...state, cart: newCart };
      break;
    default:
      newState = state;
  }

  console.log("New State:", newState);
  console.groupEnd(action.type);

  return newState;
};

export default createStore(reducer);
