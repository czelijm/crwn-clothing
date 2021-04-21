import {CartActionTypes} from "./cart.types";

import {addItemToCart} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;

/*
    1. Types
        define actions types
    2. Reducer
        1. Define initial state - json object
        2. define Reducer function - switch case of action type
    3. Action
        1. Define Action - as a function that return json object
    4. in component in which you want to access action with
        A. mapDispatchToProps - inside define json object 
            { 
                ACTION_NAME: (dispatch) => dispatch(ACTION_NAME())
            }
        B
    5. in component that we want to use it
        1. add as export default connect(mapStateToProps,mapDispatchToProps,...otherParameters)(COMPONENT_NAME)
    6. add reducer to rootreducer
*/