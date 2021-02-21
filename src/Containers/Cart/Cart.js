import React from 'react'
import classes from './Cart.css'  
const cart = (props) =>{

    const cart= props.cart.map(cartItem=>{
        return(
                <tr>
                  <td>{cartItem.name}</td>
                  <td>{cartItem.price} $</td>
                </tr>
        )
    })
    return(
        
         <div className={classes.Cart}>
             <table>
                
                <tr>
                    <th> Proucts</th>
                     <th>Price</th>
                </tr>
                    {cart}
                    <tr>
                    <th> Total </th>
                     <th>price</th>
                </tr>
                
             </table>

         </div>
    )
} 

export default cart;