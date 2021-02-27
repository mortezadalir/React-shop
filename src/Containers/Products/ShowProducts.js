import React, {Component} from 'react';
import ShowProduct from './ShowProduct/ShowProduct';
import classes from './ShowProducts.css';



class Fruits extends Component{
   

    render(){
        console.log(this.props);
        const fruits=this.props.products.map(fruit => {
            
            return (
                <div className={classes.Fruit} key={fruit.id}>
                    <ShowProduct 
              
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