import React, {Component} from 'react'
import Cleaning from './Cleaning/Cleaning'
import classes from './Cleanings.css'


class Cleanings extends Component{
    
    render(){
      console.log(this.props)
        const cleanings=this.props.cleanings.map(cleanings => {
            
            return (
                <div className={classes.cleanings}  key={cleanings.id}>
                  <Cleaning 
                     name={cleanings.name} 
                     price={cleanings.price} 
                     shoped={() => this.props.shoped(cleanings)}
                     imageUrl={cleanings.imageUrl}/>

                </div>
            ) 
        });
        return(
            <div className={classes.Cleanings}>
                {cleanings}
                
            </div>
        )
    }
}

export default Cleanings;