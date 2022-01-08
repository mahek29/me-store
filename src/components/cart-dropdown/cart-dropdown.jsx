import React from 'react';
import {connect} from 'react-redux';
import Button from '../button/button.jsx';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({cartItems,history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => 
                (<CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <span className='empty-message'>Your cart is empty.</span>
                
                }
        </div>
        <Button onClick={()=>{
        history.push('/checkout');
        dispatch(toggleCartHidden());
        
        }}>
        CHECKOUT
        </Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));