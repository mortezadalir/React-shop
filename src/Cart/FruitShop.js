import React, {Component} from 'react'
import classes from  './App.css';




class Fruit extends Component{
state={
    fruit: require('./fruit.jpg'),
    cleaning: require('./cleaning.jpg'),
}


    render(){
        console.log(this.props.categury )
        return(
            <div className={classes.App1}>
                 <a onClick={ ()=> {console.log("hello")} } > 
                 <img className={classes.titleImage} src={this.props.titleImage}/>
                 </a>
                {this.props.categury==='cleaning' ? 
                    <div>
                        <img  className={classes.ImageItem} src={this.state.cleaning} alt="can't Show"/>
                    </div>: <div>
                        <img  className={classes.ImageItem} src={this.state.fruit} alt="can't Show"/>
                    </div>
                 }
                
                
            </div>
        )
    }
}

export default Fruit;