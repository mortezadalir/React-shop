import React, { Component } from 'react';
import classes from  './App.css';
import Cart from './Cart/cartComponent'
import Navbar from './navbar/nabvar'
import Fruit from './Cart/FruitShop'
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {



  state={
    title:require("./untitle.png"),
    categury: ['fruit','cleaning'],
    fruit:[
        { categury: 'fruit',
        id: '1',
        name: 'Apple',
        price:5,
        imageUrl: require("./Cart/apple.jpg")},
        { categury: 'fruit',
          id:'2',
        name: 'banana',
        price:10,
        imageUrl: require("./Cart/banana.jpg"),
        },
        {
          categury: 'fruit',
          id:'3',
        name: 'orange',
        price:7,
        imageUrl: require("./Cart/orange.jpg"),
        }

    ],
    cleaning:[
      {categury: 'cleaning',
        id: '1',
       name: 'shampoo',
      price:5,
      imageUrl: require("./Cart/shampoo.jpg")},
      { categury: 'cleaning',
        id:'2',
      name: 'whitex',
      price:10,
      imageUrl: require("./Cart/whitex.jpg"),
      },
      { categury: 'cleaning',
        id:'3',
      name: 'detergent',
      price:7,
      imageUrl: require("./Cart/detergent.jpg"),
      },
      { categury: 'cleaning',
        id:'4',
      name: 'toothbrush',
      price:3,
      imageUrl: require("./Cart/toothbrush.jpg"),
      },
    ],

    buyProduct:[],
    
}





handlePrice=innput=> { 
  const cat=innput.categury;

  const buyProd=[...this.state.buyProduct];
   if (cat==="fruit"){
    const prodItem=[...this.state.fruit];
    const index= prodItem.indexOf(innput);
    buyProd.push(prodItem[index]);
    console.log(buyProd);
    this.setState({buyProduct:buyProd});
   }
   if (cat==="cleaning"){
    const prodItem=[...this.state.cleaning];
    const index= prodItem.indexOf(innput);
    buyProd.push(prodItem[index]);
    this.setState({buyProduct:buyProd});
     
  }
   

}
show



  render() {
    const contItem= this.state.buyProduct;
    
    let fruitItemAll=null;
    fruitItemAll=(

      <div className={classes.App1}>
        {this.state.cleaning.map(c =>{
        return(
 
          <Cart key={c.id} click={this.handlePrice} fruitItem={c} />
         
        )
       
        })}
     
      </div>

    )


 
    return (
      <div  >
        <Navbar count={contItem.length}  />
        <Fruit titleImage={this.state.title} categury={this.state.categury[1]}/>
      {fruitItemAll}
      </div>
    );
  }
}

export default App;
