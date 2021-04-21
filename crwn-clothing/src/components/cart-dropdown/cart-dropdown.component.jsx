import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems} from '../../redux/cart/cart.selector';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem} /> ))
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
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
export default connect(mapStateToProps)(CartDropdown);