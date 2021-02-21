import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.css'
import Cart from '../../assets/Cart.png'


const navbar=(props) =>{
  
      return(
        <div>
        <header className={classes.Header}>
          <ul>
            
            <Link to="/friuts"  ><li>Fruit</li></Link>
            <Link to="/cleanings"  ><li>Cleaning</li></Link>
           <Link to="/cart"><img src={Cart} alt="cant show"></img></Link> <span>{props.count}</span>
          </ul>
        </header>
        </div>
    )
}
export default navbar;