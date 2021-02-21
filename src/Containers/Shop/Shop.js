import React, { Component } from 'react';
import classes from  './Shop.css';
import Fruits from '../Products/Fruit/Fruits'
import Cleanings from '../Products/Cleanings/Cleanings'
import {Route,Switch} from 'react-router-dom' 
import Navbar from '../../Components/Navbar/Navbar';
import Cart from '../Cart/Cart'


class Shop extends Component {

  state={
    cleanings:[
      {categury: 'cleaning',
        id: '1',
       name: 'shampoo',
      price:5,
      imageUrl: require("../../assets/shampoo.jpg")},
      { categury: 'cleaning',
        id:'2',
      name: 'whitex',
      price:10,
      imageUrl: require("../../assets/whitex.jpg"),
      },
      { categury: 'cleaning',
        id:'3',
      name: 'detergent',
      price:7,
      imageUrl: require("../../assets/detergent.jpg"),
      },
      { categury: 'cleaning',
        id:'4',
      name: 'toothbrush',
      price:3,
      imageUrl: require("../../assets/toothbrush.jpg"),
      },
    ],
    fruit:[
      { categury: 'fruit',
      id: '1',
      name: 'Apple',
      price:5,
      imageUrl: require("../../assets/apple.jpg")},
      { categury: 'fruit',
        id:'2',
      name: 'banana',
      price:10,
      imageUrl: require("../../assets/banana.jpg"),
      },
      {
        categury: 'fruit',
        id:'3',
      name: 'orange',
      price:7,
      imageUrl: require("../../assets/orange.jpg"),
      }
  ],
  cart: [],
}


 shopHandler(product){
    const prevCart=this.state.cart;
    const newcart=[...prevCart,product];
    this.setState({cart:newcart});
    

    };

  render() {
    console.log(this.state.cart);
    return (
      
      <div  className={classes.Shop}>
        <Navbar count={this.state.cart.length}/>
        <Switch>
        <Route path="/friuts"  render={() => <Fruits 
        fruits={this.state.fruit}
        shoped={(fruit)=>this.shopHandler(fruit)}/>} />

        <Route path="/cleanings" render={() => <Cleanings 
        cleanings={this.state.cleanings} shoped={(cleaning) => this.shopHandler(cleaning)}/>}/> 

        <Route path="/cart" render={()=><Cart cart={this.state.cart} />} ></Route>
       </Switch>

      </div>
    );
  }
}


export default Shop;
