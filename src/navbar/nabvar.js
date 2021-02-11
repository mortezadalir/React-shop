import React, {Component} from 'react'
import classes from './navbar.css'


class Navbar extends Component{
    state={
        imageURl:[
            require("./basket.png"),
        ]
    }

    render(){
        return ( <div className={classes.iii}>
        <a className="active" href="#">Shop</a>
        <img src={this.state.imageURl} /> <span>{this.props.count}</span> 
            </div>
          );
    }
}

export default Navbar;