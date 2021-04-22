import CartItem from "../../components/cart-item/cart-item.component";

export const addItemToCart = (cartItems, cartItemToAdd) => {
    
    const existingItem = cartItems.find(cartItem => cartItem.id===cartItemToAdd.id);

    if(existingItem){
        //we need to return new array to rerender component
        return cartItems.map(cartItem => 
            cartItem.id ===cartItemToAdd.id ?
            {...cartItem, quantity:cartItem.quantity + 1}:
            cartItem
            
            );
    }
    return [...cartItems, {...cartItemToAdd, quantity:1 }];   
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find( 
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }
    
    return cartItems.map(cartItem=>
        cartItem.id===cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :
        cartItem 
    )
    
}