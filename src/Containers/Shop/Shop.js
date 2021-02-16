import React, { Component } from 'react';
import classes from  './Shop.css';
import Fruits from '../Products/Fruit/Fruits'
import Cleanings from '../Products/Cleanings/Cleanings'
import {Route, Link, Switch} from 'react-router-dom' 
import Navbar from '../../Components/Navbar/Navbar';
class Shop extends Component {

  state={
    cart:[],
  }

 shopHandler(product){
    this.setState({cart: product});
    console.log(this.state.cart);
    };

  render() {

    return (
      <div  className={classes.Shop}>
        <Navbar  />
        <Route path="/friut"  render={() => <Fruits shoped={(fruit)=>this.shopHandler(fruit)}/>} />
        <Route path="/cleanings" render={() => <Cleanings shoped={(cleaning) => this.shopHandler(cleaning)}/>}/> 
       

      </div>
    );
  }
}


export default Shop;
