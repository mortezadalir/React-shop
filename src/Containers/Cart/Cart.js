import React from 'react';
import {connect} from 'react-redux';
import ShopingProduct from './ShopingProduct/ShopingProduct'
import classes from './Cart.css'


const cart=(props) =>{
    const shopingCart=props.cart.map(product =>{
        return(
            <div className={classes.Cart}>
                <ShopingProduct className={classes.Cart} product={product} />
            </div>
            
        )
    })
    return(
        <div >
            { shopingCart}
        </div>
    )
}
const mapStatetoProps = state =>{
    return{
        cart: state.cart,
    }
}
export default connect(mapStatetoProps,null)(cart);