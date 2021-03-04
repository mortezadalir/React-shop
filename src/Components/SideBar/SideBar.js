import React from 'react';
import classes from './Sidebar.css'
import {Link} from 'react-router-dom';
import fruitLogo from '../../assets/nutrition-outline.svg'
import houseHold from '../../assets/home-outline.svg'
import foodLogo from '../../assets/pizza-outline.svg'
import beverageLogo from '../../assets/beer-outline.svg'



const sidebar= () =>{
    return(
        <div className={classes.Sidebar}>
            <h2>Categories</h2>
            <ul>
                <Link to="foods_and_dairy"><li><img src={foodLogo}></img>food and dairy</li></Link>
                <Link to="fruits_and_vegtables"><li><img src={fruitLogo}></img>fruit and vegtable</li></Link>  
                <Link to="baverage"><li><img src={beverageLogo}></img>beverage</li></Link> 
                <Link to ="household_and_cleanings"><li><img src={houseHold}></img>household and cleaning</li></Link> 
            </ul>
        </div>
    )
}

export default sidebar;