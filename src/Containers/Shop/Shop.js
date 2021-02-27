import React, { Component } from 'react';
import classes from  './Shop.css';
import Fruits from '../Products/Fruit/Fruits'
import Cleanings from '../Products/Cleanings/Cleanings'
import {Route} from 'react-router-dom' 
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/SideBar/SideBar';




class Shop extends Component {

  state={
    cart:[],
    restProduct:[],
  }

 shopHandler(product){
   const cart=[...this.state.cart, product]
    this.setState({cart: cart});
    };

  render() {
    console.log(this.state.cart);
    return (
      <div  className={classes.Shop}>
        <Navbar count={this.state.cart.length }/>
        <Sidebar />
        <Route path="/friut"  render={() => <Fruits shoped={(fruit)=>this.shopHandler(fruit)}/>} />
        <Route path="/cleanings" render={() => <Cleanings shoped={(cleaning) => this.shopHandler(cleaning)}/>}/> 
       

      </div>
    );
  }
}


export default Shop;
