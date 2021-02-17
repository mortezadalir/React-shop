import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.css'
import Cart from '../../assets/Cart.png'


const navbar=(props) =>{
  console.log(props.count);
      return(
        <div>
        <header className={classes.Header}>
          <ul>
            
            <Link to="/friut"  ><li>Fruit</li></Link>
            <Link to="/cleanings"  ><li>Cleaning</li></Link>
            <img src={Cart} alt="cant show"></img><span>{props.count}</span>
          </ul>
        </header>
        </div>
    )
}
export default navbar;