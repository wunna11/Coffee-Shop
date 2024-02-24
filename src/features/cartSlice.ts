import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { original } from 'immer'

export interface Cart {
  id: string,
  name: string,
  image: string,
  price: number,
  size: string,
  descirption?: string,
  quantity: number,
}

export interface CartList {
  items: Cart[],
}

const initialState: CartList = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadAllCart: (state, action) => {
      state.items = action.payload === null ? [] : action.payload
    },

    addItemToCart: (state, action: PayloadAction<Cart>) => {
      const { id, name, image, price, size, quantity } = action.payload;
      const newId = id+'-'+size

      const cartItem = {
        id: newId,
        name: name,
        image: image,
        price: price,
        size: size,
        quantity: quantity,
      };

      const oldData = original(state.items) || []
      const existItem = oldData.find(e => e.id === newId)

      // find index existItem
      const findIndex = oldData.findIndex(p => p.id === existItem?.id)

      if (existItem?.size == size) {
        state.items[findIndex].quantity += quantity
      } else {
        state.items.push(cartItem)
      }
      localStorage.setItem("cart item", JSON.stringify(state.items));
    },

    increaseItem: (state, action) => {
      const { id } = action.payload
      state.items = state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart item', JSON.stringify(state.items));
    },

    decreaseItem: (state, action) => {
      const { id } = action.payload
      state.items = state.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem('cart item', JSON.stringify(state.items));
    },

    deleteItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(p => p.id != id);
      localStorage.setItem('cart item', JSON.stringify(state.items));
    },
  },
});

export const { loadAllCart, addItemToCart, increaseItem, decreaseItem, deleteItem } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;