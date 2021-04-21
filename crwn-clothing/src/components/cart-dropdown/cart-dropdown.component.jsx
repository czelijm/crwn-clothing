import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/cart.selector';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

//history is from withRouter 
const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length?
            cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem} /> ))
            : 
            <span className='empty-message'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => history.push('/checkout')} >GO TO CHECKOUT</CustomButton>
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
export default withRouter(connect(mapStateToProps)(CartDropdown));