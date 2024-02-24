import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import coffeeList from '../data/products.json';

export interface Detail {
    size: string
    price: number
}

export interface Coffee {
    id: string 
    displayName: string
    type: string
    price: number
    description: string
    image: string
    detail: Array<Detail>
}

export interface CoffeeList {
    items: Array<Coffee>
}

const initialState: CoffeeList = {
    items: coffeeList
}

export const coffeeSlice = createSlice({
    name: 'coffees',
    initialState,
    reducers: {
    },
});

export const selectCoffee = (state: RootState) => state.coffee.items;

export default coffeeSlice.reducer;