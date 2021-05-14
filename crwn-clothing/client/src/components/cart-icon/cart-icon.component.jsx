import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//this is selector, because it's select particular part of state, selector is function
// const mapStateToProps = ({cart:{cartItems}}) =>({
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem)=> accumulatedQuantity + cartItem.quantity,0)
//})

//without createStructuredSelector
// const mapStateToProps = (state) =>({
//     itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);