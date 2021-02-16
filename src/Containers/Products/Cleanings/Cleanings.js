import React, {Component} from 'react'
import cleaning from './Cleaning/Cleaning';
import Cleaning from './Cleaning/Cleaning'
import classes from './Cleanings.css'


class Cleanings extends Component{
    
  state={
    cleaning:[
      {categury: 'cleaning',
        id: '1',
       name: 'shampoo',
      price:5,
      imageUrl: require("../../../assets/shampoo.jpg")},
      { categury: 'cleaning',
        id:'2',
      name: 'whitex',
      price:10,
      imageUrl: require("../../../assets/whitex.jpg"),
      },
      { categury: 'cleaning',
        id:'3',
      name: 'detergent',
      price:7,
      imageUrl: require("../../../assets/detergent.jpg"),
      },
      { categury: 'cleaning',
        id:'4',
      name: 'toothbrush',
      price:3,
      imageUrl: require("../../../assets/toothbrush.jpg"),
      },
    ],
}

    render(){
        const cleanings=this.state.cleaning.map(cleanings => {
            
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