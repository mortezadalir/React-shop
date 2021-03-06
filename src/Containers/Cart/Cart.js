import React, {Component} from 'react';
import {connect} from 'react-redux';
import ShopingProduct from './ShopingProduct/ShopingProduct'
import classes from './Cart.css'



class Cart extends Component {

    render(){
        
        const shopingCart=this.props.cart.map(product =>{
            return(
                <div 
                    key={product.id}>
                    <ShopingProduct
                     shoped={()=> this.props.onShopHandler(product)}
                     unshoped={()=> this.props.onDecrementhandler(product)}
                     product={product} />
                    
                </div>
                
            )
        })
        const warnAboutCart= (
            <div className={classes.Text}>
                <h3> You have nothing in the shoping cart,</h3><br/><h3> Please got to
                     <span style={{color: 'red'}}> Sidebar</span> and choose any category you want 
                    and buy products you need</h3> 
            </div>
        )
        return(
            <div className={classes.Cart}>
                {shopingCart}
                {shopingCart.length>0 ? <button className={classes.Button} >Shoping Now</button>:warnAboutCart}
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
        onShopHandler: (product) => dispatch({type: 'AddToCart', product:product}),
        onDecrementhandler:(product) => dispatch({type:'SubOfCart',product:product}),
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Cart);