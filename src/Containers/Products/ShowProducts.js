import React, {Component} from 'react';
import ShowProduct from './ShowProduct/ShowProduct';
import classes from './ShowProducts.css';
import {connect} from 'react-redux';



class Fruits extends Component{
   

    render(){
     console.log(this.props.cart);
        
        const fruits=this.props.products.map(fruit => {
            
            return (
                <div className={classes.Fruit} key={fruit.id}>
                    <ShowProduct 
              
              name={fruit.name} 
              price={fruit.price} 
              shoped={()=>this.props.onShopHandler(fruit)}
              imageUrl={fruit.imageUrl}/>

                </div>
            ) 
        });
        return(
            <div className={classes.ShowProuducts}>
                {fruits}
                
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
      cart: state.cart,
    }
  }
  
  const mapDispatchToProps= dispatch => {
    return {
      onShopHandler:(product) => dispatch({type:'AddToCart',product:product})
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(Fruits);