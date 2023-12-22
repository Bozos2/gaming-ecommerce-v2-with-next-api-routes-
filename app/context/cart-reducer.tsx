"use client";

import React, { ReactNode, useReducer, useContext, useEffect } from "react";

import { CartContext } from "./cart-context";
import {
  CartItem,
  CartAction,
  ActionType,
  CartContextStateType,
} from "../types/ContextTypes";

type DefaultData = {
  items: CartItem[];
  totalAmount: number;
};

const defaultCartState: DefaultData = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: DefaultData, action: CartAction) => {
  switch (action.type) {
    case ActionType.ADD:
      const updatedTotalAmount = state.totalAmount + action.item.price;

      const existingCartItemIndex = state.items?.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items?.[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items?.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case ActionType.REMOVE:
      const existingCartItemIndex1 = state.items?.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items?.[existingCartItemIndex1];
      const updatedTotalAmount1 = state.totalAmount - existingItem.price;
      let updatedItems1;
      if (existingItem.amount === 1) {
        updatedItems1 = state.items?.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems1 = [...state.items];
        updatedItems1[existingCartItemIndex1] = updatedItem;
      }
      return {
        items: updatedItems1,
        totalAmount: updatedTotalAmount1,
      };
    case ActionType.UPDATE_VALUE:
      const updatedItems2 = state.items?.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            amount: action.newAmount,
          };
        }
        return item;
      });

      const updatedTotalAmount2 = updatedItems2.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );

      return {
        items: updatedItems2,
        totalAmount: updatedTotalAmount2,
      };
    case ActionType.SET_CART: {
      const updatedItems = [...state.items];
      const updatedTotalAmount3 = state.totalAmount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount3,
      };
    }
  }
};

type Children = {
  children: ReactNode;
};

const CartProvider = ({ children }: Children) => {
  let initialCartState = defaultCartState;

  if (typeof window !== "undefined") {
    const storedCart = window.localStorage.getItem("cart");
    initialCartState = storedCart ? JSON.parse(storedCart) : defaultCartState;
  } else {
    initialCartState = defaultCartState;
  }

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: ActionType.ADD, item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: ActionType.REMOVE, id: id });
  };

  const updateItemAmountHandler = (id: string, newAmount: number) => {
    dispatchCartAction({
      type: ActionType.UPDATE_VALUE,
      id: id,
      newAmount: newAmount,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartState));
    }
  }, [cartState]);

  const cartContext: CartContextStateType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItemAmount: updateItemAmountHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
