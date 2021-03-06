import React, {Component} from 'react';
import ShowProduct from './ShowProduct/ShowProduct';
import classes from './ShowProducts.css';
import {connect} from 'react-redux';



class Fruits extends Component{
   

    render(){
        console.log(this.props.cart);
        const products=this.props.products.map(product => {
            

            return (
                <div className={classes.Fruit} key={product.id}>
                  <ShowProduct 
              
              name={product.name} 
              price={product.price} 
              shoped={()=>this.props.onIncrementHandler(product)}
              imageUrl={product.imageUrl}/>

                </div>
            ) 
        });
        return(
            <div className={classes.ShowProuducts}>
                {products}
                
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
      onIncrementHandler:(product) => dispatch({type:'AddToCart',product:product}),
      
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(Fruits);