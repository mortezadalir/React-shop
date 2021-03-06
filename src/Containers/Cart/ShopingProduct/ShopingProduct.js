import React from 'react';
import classes from './ShopingProduct.css'
import Button from '../../../Components/UI/Button/Button' 



const shopingProduct= (props) =>{
    
    return(
        <div className={classes.ShopingProduct} >
            <span>  <h2>{props.product.name} </h2> <h4>price:{props.product.price}</h4> </span>
            <img src={props.product.imageUrl} />
            
            <h3> quantity: {props.product.quantity}</h3>
            <div className={classes.Button}>
                <Button
                 btnType='Success'
                shoped={props.shoped}> +</Button> 
                <Button 
                 btnType='Cancel'
                shoped={props.unshoped}> -</Button> 
            </div>


        </div>

    )
}

export default shopingProduct;