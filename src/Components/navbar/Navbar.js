import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.css'
import Cart from '../../assets/Cart.png'
import {connect} from 'react-redux'


const navbar=(props) =>{
 
      return(
        <div>
        <header className={classes.Header}>
          <ul>
            
            <Link to="/friut"  ><li>Fruit</li></Link>
            <Link to="/cleanings"  ><li>Cleaning</li></Link>
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