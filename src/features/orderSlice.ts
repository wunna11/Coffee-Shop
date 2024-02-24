import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Cart } from "./cartSlice";

export interface Order {
  payment: string,
  paid: boolean,
  cost: number,
  date: string,
  items: Array<Cart>
}

export interface OrderList {
  items: Array<Order>
}

const initialState: OrderList = {
  items: [],
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    loadAllOrder: (state, action) => {
      state.items = action.payload === null ? [] : action.payload
    },
    addOrder: (state, action) => {
      const existingOrders = JSON.parse(localStorage.getItem('order item') || '[]');
      const updatedOrders = [...existingOrders, action.payload];
      state.items = updatedOrders;
      
      localStorage.setItem('order item', JSON.stringify(state.items))
      localStorage.removeItem('cart item');
    }
  },
});

export const { loadAllOrder, addOrder } = orderSlice.actions;

export const selectOrder = (state: RootState) => state.order.items;

export default orderSlice.reducer;