import { createContext } from "react";
import { Cart } from "../features/cartSlice";

interface Order  {
  payment: string;
  paid: boolean;
  cost: number;
  date: string;
  items: Array<Cart>
}

export const OrderContext = createContext<any | null>(null);