import React from 'react'
import classes from './CartButton.module.css'

const CartButton = (props) => {
    return (
        <button className={classes['cart-button']} onClick={props.onClick}>
            <span className={classes['cart-button__amount-purchase']}>{props.counter}</span>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className={classes['cart-button__text']}>Корзина</span>
        </button>
    )
}

export default CartButton