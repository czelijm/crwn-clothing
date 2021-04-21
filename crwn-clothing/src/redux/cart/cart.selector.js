import {createSelector} from 'reselect';

//1st type
const selectCart = (state) => state.cart;


//1st arg, array of inputselectos
//2nd function which arguments are output from inputselectors in order which that inputselectors were
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems 
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
) 

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem)=> accumulatedQuantity + cartItem.quantity,0)
)
/*
    there is 2 types of selectors
        1. input selector that doesn't use create selector
        2. output selector that use input selectors and createSelector  
*/ 