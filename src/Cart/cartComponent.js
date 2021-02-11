import React, {Component} from 'react';
import classes from './style.css';


 const Cart =props => {
     let styleItem=[];


     //css class of prouduct
        styleItem.push(classes.Card)
        if(props.fruitItem.id==="1"){
            styleItem.push(classes.Item1)
        }
        if(props.fruitItem.id==="2"){
            styleItem.push(classes.Item2)
        }
         
        if(props.fruitItem.id==="3"){
            styleItem.push(classes.Item3)
        }

        if(props.fruitItem.id==="4"){
            styleItem.push(classes.Item4)
        }






      
           return (
           <div className={ styleItem.join(" ")} >

               <div >
               <h5>{props.fruitItem.name} </h5>

                   <img className={classes.Image} src={props.fruitItem.imageUrl}  alt="Card image cap"/><br/>
                   <span> Price: {props.fruitItem.price}$</span>
                   <button className={classes.Button}
                   onClick={()=> props.click(props.fruitItem)}
                    >Buy</button> 
               </div>
               
           </div> 
        )
   

}

export  default Cart;