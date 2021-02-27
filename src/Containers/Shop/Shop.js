import React, { Component } from 'react';
import classes from  './Shop.css';
import ShowProducts from '../../Containers/Products/ShowProducts'
import {Route} from 'react-router-dom' 
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/SideBar/SideBar';
import products from '../../Components/Products/Products'




class Shop extends Component {

  state={...products};

 shopHandler(product){
   const cart=[...this.state.cart, product]
    this.setState({cart: cart});
    };

  render() {
    return (
      <div  className={classes.Shop}>
        <Navbar />
        <Sidebar />
        <Route path="/foods_and_dairy" render={() => <ShowProducts products={this.state.food} />} />
        <Route path="/fruits_and_vegtables" render={() => <ShowProducts products={this.state.fruit} /> } />
        <Route path="/baverage" render={() => <ShowProducts products={this.state.beverage} />} />
        <Route path="/household_and_cleanings" render={() => <ShowProducts products={this.state.household} />} />

      </div>
    );
  }
}


export default Shop;
