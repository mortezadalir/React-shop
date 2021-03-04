import React from 'react';
import classes from './ShopingProduct.css'
import Button from '../../../Components/UI/Button/Button' 



const shopingProduct= (props) =>{
    console.log(props)
    return(
        <div className={classes.ShopingProduct} >
            <span>  <h2>{props.product.name} </h2> <h4>price:{props.product.price}</h4> </span>
            <img src={props.product.imageUrl} />
            
            <h3> quantity: {props.product.quantity}</h3>
            <button onClick={props.shoped}>hiiiii</button>
            <Button shoped={props.shoped}> +</Button> 

        </div>

    )
}

export default shopingProduct;