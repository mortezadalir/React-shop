import React, {Component} from 'react';
import classes from './Slider.css'
 


class Slider extends Component{
     state={
         imageUrl:[
             require('../../assets/category/Food_and_Dairy.jpg'),
             require('../../assets/category/beverage.jpg'),
             require('../../assets/category/Fruit_and_vegtables.jpg'),
             require('../../assets/category/household_and_cleanings.jpg'),
            ],
            slideNumber:0,
    }

    slideIncrementHandler= ()=>{
        let slideNum = this.state.slideNumber;
        
        slideNum++;
        if (slideNum ===this.state.imageUrl.length){
            slideNum=0;
        }
        this.setState({slideNumber:slideNum})
    }

    slideDecrementHandler= ()=>{
        let slideNum = this.state.slideNumber;
        slideNum--;
        if (slideNum ===-1){
            slideNum=this.state.imageUrl.length-1;
        }
        this.setState({slideNumber:slideNum})
    }
    render(){
        const x=classes.Span;
        console.log(x);


        
        return(
            <div className={classes.Slider}>
                <img src={this.state.imageUrl[this.state.slideNumber]} alt=""/>
                
                <a className={classes.Prev}
                     onClick={this.slideDecrementHandler} >&#10094;</a>
                <a className={classes.Next}
                     onClick={this.slideIncrementHandler}>&#10095;</a>

                <div className={classes.Dot}>
                    <span className={classes.Span} ></span>
                    <span className={classes.Span} ></span>
                    <span className={classes.Span} ></span>
                    <span className={classes.Span} ></span>
                </div>

            </div>

          )
    }
}


export default Slider;