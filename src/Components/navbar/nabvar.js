import React, {Component} from 'react'
import classes from './navbar.css'


class Navbar extends Component{
    state={
        imageURl:[
            require("./basket.png"),
        ]
    }

    render(){
        return ( <div className={classes.Navbar}>
            <ul>
                <li onClick={()=>this.props.changeCategury('fruit')}>fruit</li>
                <li onClick={()=>this.props.changeCategury('cleaning')}>cleaning</li>
            </ul>
        
            </div>
          );
    }
}

export default Navbar;