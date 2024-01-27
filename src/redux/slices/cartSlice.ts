import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

const initialState: CartState = {
    cart: [],
    totalQuantity: 0,
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add an item to cart
        add(state, action) {

            let find = state.cart.findIndex((item: CartProduct) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += action.payload.quantity
            } else {
                state.cart.push(action.payload)
            }

        },       
        // calculate the total amount and total quantitiy of items in cart
        getCartTotal(state) {
            let { totalAmount, totalQuantity } = state.cart.reduce(
                (cartTotal: any, cartItems: any) => {
                    //    console.log("cartTotal: ", cartTotal)
                    //    console.log("cartItems: ", cartItems)
                    const { price, quantity } = cartItems
                    // console.log(price,quantity)
                    const itemTotal = price * quantity
                    cartTotal.totalAmount += itemTotal
                    cartTotal.totalQuantity += quantity
                    return cartTotal
                },
                {
                    totalAmount: 0,
                    totalQuantity: 0
                }
            )
            state.totalAmount = parseInt(totalAmount.toFixed(2))
            state.totalQuantity = totalQuantity
        },

        increaseProductQuantity (state,action){
            let find = state.cart.findIndex((item: CartProduct) => item.id === action.payload)
            ++state.cart[find].quantity
        },

        decreaseProductQuantity (state,action){
            
            let find = state.cart.findIndex((item: CartProduct) => item.id === action.payload)
            // checking if the quantity is greater than 1 then decrease it by 1. If it is 1 then remove the item from cart
            if(state.cart[find].quantity>1){
                --state.cart[find].quantity
            }else{
                    state.cart = state.cart.filter((item:Product) => item.id !== action.payload);
                }
        },
    }
})



export const { add, getCartTotal,increaseProductQuantity,decreaseProductQuantity } = cartSlice.actions
export default cartSlice.reducer