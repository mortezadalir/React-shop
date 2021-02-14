import React from 'react'
import classes from './Cleaning.css'



const cleaning= (props) =>{
    return(
        <div className={classes.Cleaning}>
            <h1>{props.name}</h1>
            <img src={props.imageUrl} />
            <h2>Price:  {props.price}$</h2>
            <button>Buy</button>
            
        </div>
    )
}

export default cleaning;