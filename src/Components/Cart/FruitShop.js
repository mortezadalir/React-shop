import React, {Component} from 'react'
import classes from  './App.css';

class Fruit extends Component{


    render(){

        return(
            <div className={classes.App1}>
                 <a 
                 onClick={ this.props.categuryChanger} > 

                 <img className={classes.titleImage} 
                 onClick={this.props.categuryChanger}
                 src={this.props.titleImage} alt="can't show "/>
                 </a>
                 <img  className={classes.ImageItem} src={this.props.categuryItemPicture} alt="can't Show"/>
                   
                
                
            </div>
        )
    }
}

export default Fruit;