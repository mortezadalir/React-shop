import React , {Component} from 'react';
import Cart from './cartComponent'

class Carts extends Component {
    render(){
        return(
            <div className="container" style={{color: 'blue',position: "relative",left: '40px'}} >
            <Cart />
            <Cart /> 
            <Cart />
            </div>
            
            
        )
    }
}

export default Carts;