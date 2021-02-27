import React, {Component} from 'react'
import cleaning from './Cleaning/Cleaning';
import Cleaning from './Cleaning/Cleaning'
import classes from './Cleanings.css'
import products from '../../../Components/Products/Products'

const strr='../../../assets';


class Cleanings extends Component{
  
    
  state=products;

    render(){
        const cleanings=this.state.household.map(cleanings => {
            
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