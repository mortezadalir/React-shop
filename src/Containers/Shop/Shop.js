import React, { Component } from 'react';
import classes from  './Shop.css';
import Cart from '../../Components/Cart/cartComponent'
import Navbar from '../../Components/navbar/nabvar'
import Fruits from '../Products/Fruit/Fruits'
import BuyCart from '../../Components/BuyCart/BuyCart';
import Cleanings from '../Products/Cleanings/Cleanings'
import {Route, Link, Switch} from 'react-router-dom' 


class Shop extends Component {



  render() {
    return (
      <div  >
        
        <Fruits />
        <Cleanings />

      </div>
    );
  }
}


export default Shop;
