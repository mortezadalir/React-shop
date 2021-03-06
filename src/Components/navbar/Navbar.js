import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.css'

import {connect} from 'react-redux'
import Cart from '../../assets/cart-outline.svg';





const navbar=(props) =>{
    
 
      return(
        <div>
        <header className={classes.Header}>
          <ul>
            
            <Link to="/"  ><li><h2> Home</h2></li></Link>
            <Link to="/cart"><img src={Cart} alt="cant show"></img><span>{props.count}</span></Link>
          </ul>
        </header>
        </div>
    )
}
const mapStateToProps=state=>{
  return{
    count: state.cart.length
  }
}
export default connect(mapStateToProps,null)(navbar);