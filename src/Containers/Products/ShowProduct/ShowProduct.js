import React from 'react'
import classes from './ShowProduct.css'



const fruit= (props) =>{
    return(
        <div className={classes.Fruit}>
            <h1>{props.name}</h1>
            <img src={props.imageUrl} alt="" />
            <h2>Price:  {props.price}$</h2>
            <button onClick={props.shoped}>Buy</button>
          
            
        </div>
    )
}

export default fruit;