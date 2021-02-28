import React from 'react';
import classes from './ShopingProduct.css'



const shopingProduct= (props) =>{
    console.log(props)
    return(
        <div className={classes.ShopingProduct} >
            <span>  <h2>{props.product.name} </h2> <h4>price:{props.product.price}</h4> </span>
            <img src={props.product.imageUrl} />
            
            <h3> quantity: {props.product.quantity}</h3>

        </div>

    )
}

export default shopingProduct;