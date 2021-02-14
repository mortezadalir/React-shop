import React, {Component} from 'react'
import Fruit from './Fruit/Fruit'
import classes from './Fruits.css'


class Fruits extends Component{
    state={
        fruit:[
            { categury: 'fruit',
            id: '1',
            name: 'Apple',
            price:5,
            imageUrl: require("../../../assets/apple.jpg")},
            { categury: 'fruit',
              id:'2',
            name: 'banana',
            price:10,
            imageUrl: require("../../../assets/banana.jpg"),
            },
            {
              categury: 'fruit',
              id:'3',
            name: 'orange',
            price:7,
            imageUrl: require("../../../assets/orange.jpg"),
            }
        ]
    }

    render(){
        const fruits=this.state.fruit.map(fruit => {
            
            return (
                <div className={classes.Fruit}>
                    <Fruit 
              key={fruit.id}
              name={fruit.name} 
              price={fruit.price} 
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