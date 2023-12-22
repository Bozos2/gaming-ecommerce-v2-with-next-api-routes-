import React from "react";
import { CartContextStateType } from "../types/ContextTypes";

const cartContextStateDefaultValues: CartContextStateType = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  updateItemAmount: (id, newAmount) => {},
};

const CartContext = React.createContext<CartContextStateType>(
  cartContextStateDefaultValues
);

export { CartContext };
