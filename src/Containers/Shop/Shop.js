import React, { Component } from 'react';
import classes from  './Shop.css';
import Cart from '../../Components/Cart/cartComponent'
import Navbar from '../../Components/navbar/nabvar'
import Fruit from '../../Components/Cart/FruitShop'


class App extends Component {



  state={
    title:require("../../assets/untitle.png"),


    categury:[
        { 
           name:'fruit',
           imageURL: require("../../assets/fruit.jpg"),
         },
      {
          name:'cleaning',
          imageURL: require('../../assets/cleaning.jpg')
      }],
     




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
    cleaning:[
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

    buyProduct:[],
    categuryItem: true,
    categuryItemselect:null,
    
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

changeCategoryHandler=(cat) =>{
  console.log(cat);
  let categuryItemSelector=null;
  if (cat==="fruit"){
    categuryItemSelector=this.state.fruit;
  }
  else{
    categuryItemSelector=this.state.cleaning;
  }
  this.setState({categuryItemselect:categuryItemSelector})

  }



  render() {

    // let categuryItemselect =null;
    // if (this.state.categuryItem){
    //   categuryItemselect=this.state.fruit;
    // }
    let fruitItemAll=null;
    const contItem= this.state.buyProduct;
    if( this.state.categuryItemselect){
    
    fruitItemAll=(

      <div className={classes.App1}>
        {this.state.categuryItemselect.map(c =>{
        return(
 
          <Cart key={c.id} click={this.handlePrice} fruitItem={c} />
         
        )
       
        })}
      </div>

    )


      } 
    return (
      <div  >
        
        <Navbar count={contItem.length} 
        changeCategury={this.changeCategoryHandler}/>
        <Fruit 
          titleImage={this.state.title}
          categuryItemPicture={this.state.categury[1].imageURL}
          categury={this.state.categury[1].name}/>
        {fruitItemAll}
      </div>
    );
  }
}


export default App;
