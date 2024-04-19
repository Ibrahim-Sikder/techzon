/* eslint-disable @typescript-eslint/no-explicit-any */
import { products } from './../../data/products';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice:0,
    tax:0,
    taxRate: 0.1,
    grandTotal: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCard: (state, action)=>{
            const exist = state.products.find((product)=>product.id === action.payload.id)
            if(!exist){
                 state.products.push({...action.payload, quantity:1 })
            }
            state.selectedItems = selectSelectedItems(state);
            state.totalPrice = selectedTotalPrice(state);
            state.tax = selectTax(state);
            state.grandTotal = selectGrandTotal(state);
        },
        updateQuantity: (state, action)=>{
            const products = state.products.map((product:any)=>{
                if(product.id ===  action.payload.id){
                    if(action.payload.type === 'increment'){
                        product.quantity += 1
                    }else if (action.payload.type === 'decrement'){
                        product.quantity -= 1
                    }
                }
                return product;
            })
            state.products = products.filter((product:any)=>product.quantity > 0 );
            state.selectedItems = selectSelectedItems(state);
            state.totalPrice = selectedTotalPrice(state);
            state.tax = selectTax(state);
            state.grandTotal = selectGrandTotal(state);
        },
        removeFromCart: (state,action)=>{
            state.products = state.products.filter((product)=>product.id !== action.payload.id);
            state.selectedItems = selectSelectedItems(state);
            state.totalPrice = selectedTotalPrice(state);
            state.tax = selectTax(state);
            state.grandTotal = selectGrandTotal(state);
        }

    }
})

export const selectSelectedItems = (state:any)=>state.products.reduce((total:number, product:any)=>{return total + product.quantity},0)

export const selectedTotalPrice = (state:any)=>state.products.reduce((total:number, product:any)=>{return total + product.quantity * product.price},0)

export const selectTax = (state:any)=>selectedTotalPrice(state)* state.taxRate 

export const selectGrandTotal = (state:any)=>{
    return selectedTotalPrice(state)+selectedTotalPrice(state)* state.taxRate
}





export const {addToCard, updateQuantity, removeFromCart} = cartSlice.actions

export default cartSlice.reducer