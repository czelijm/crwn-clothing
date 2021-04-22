import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

//history is from withRouter 
//dispatch is here, because if we dont supply our second arg in connect the dispatch is in props
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length?
            cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem} /> ))
            : 
            <span className='empty-message'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

//no structored selector
// const mapStateToProps = (state) =>({
//     cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//connect to store where cartReducerStore cartItems
//connect passes dispatch to props when we dont supply mapDispatchToProps as second argument 
export default withRouter(connect(mapStateToProps)(CartDropdown));