import React from 'react'
import classes from './Header.module.css'
import CartButton from '../UI/CartButton/CartButton'
import { withRouter, Link } from 'react-router-dom'

 const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header__inner}>
                    <div className={classes.logo}>
                        <Link to ='/'className={classes.logo__link}>
                        <h2 className={classes.logo__title}>Fitness House Market</h2>
                        </Link>
                    </div>
                    <CartButton onClick={props.onClick} counter={props.counter}/>
                </div>
               
            </div>               
        </header>
    )
}

export default withRouter(Header) 