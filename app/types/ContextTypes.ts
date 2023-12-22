export interface CartItem {
  id: string;
  src: string;
  title: string;
  price: number;
  dimensions: string;
  amount: number | 1;
}

export enum ActionType {
  ADD,
  REMOVE,
  CLEAR,
  UPDATE_VALUE,
  SET_CART,
}

export interface AddToCartAction {
  type: ActionType.ADD;
  item: CartItem;
}

export interface RemoveFromCartAction {
  type: ActionType.REMOVE;
  id: string;
}

export interface UpdateItemAmountAction {
  type: ActionType.UPDATE_VALUE;
  id: string;
  newAmount: number;
}

export interface SetCartAction {
  type: ActionType.SET_CART;
  item: CartItem[];
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateItemAmountAction
  | SetCartAction;

export interface CartContextStateType {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemAmount: (id: string, newAmount: number) => void;
}
