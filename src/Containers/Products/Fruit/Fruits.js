import React, {Component} from 'react'
import Fruit from './Fruit/Fruit'
import classes from './Fruits.css'


class Fruits extends Component{
 
    render(){
        const fruits=this.props.fruits.map(fruit => {
            
            return (
                <div className={classes.Fruit} key={fruit.id}>
                    <Fruit 
              
              name={fruit.name} 
              price={fruit.price} 
              shoped={() =>this.props.shoped(fruit)}
              imageUrl={fruit.imageUrl}/>

                </div>
            ) 
        });
        return(
            <div className={classes.Fruits}>
                {fruits}
                
            </div>
        )
    }
}

export default Fruits;