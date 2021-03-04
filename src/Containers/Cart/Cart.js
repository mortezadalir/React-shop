import React, {Component} from 'react';
import {connect} from 'react-redux';
import ShopingProduct from './ShopingProduct/ShopingProduct'
import classes from './Cart.css'



class Cart extends Component {

    shopedHand = () =>{
        console.log('hello');
    }

    render(){
        const shopingCart=this.props.cart.map(product =>{
            return(
                <div className={classes.Cart}
                key={product.id}>
                    <ShopingProduct
                    
                     className={classes.Cart} 
                     shoped={()=> this.props.onShopHandler(product)}
                     product={product} />
                     
                </div>
                
            )
        })
        return(
            <div >
                {shopingCart}
            </div>
        )
    }

}
const mapStatetoProps = state =>{
    return{
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onShopHandler: (product) => dispatch({type: 'AddToCart', product:product})
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Cart);