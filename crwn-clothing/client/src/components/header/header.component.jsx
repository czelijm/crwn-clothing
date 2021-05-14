import React from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// import './header.style.scss';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'

import { ReactComponent as Logo  } from '../../assets/crown.svg';
// import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {singOutStart} from '../../redux/user/user.action'

const Header = ({currentUser,hidden,singOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                //if
                currentUser?
                //treat this element as div not Link
                <OptionLink as='div' onClick={singOutStart}> 
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden? null : <CartDropdown/>
        }
    </HeaderContainer>
)

//state is rootREducer
//nested destructure
//in structuredSelector will automatically take top level state
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch =>({
    singOutStart: () => dispatch(singOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);