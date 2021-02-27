import React from 'react';
import classes from './Sidebar.css'
import {Link} from 'react-router-dom';

const sidebar= () =>{
    return(
        <div className={classes.Sidebar}>
            <ul>
                <Link to="foods_and_dairy"><li>foods and dairy</li></Link>
                <Link to="fruits_and_vegtables"><li>fruits and vegtables</li></Link>  
                <Link to="baverage"><li>beverage</li></Link> 
                <Link to ="household_and_cleanings"><li>household and cleanings</li></Link> 
            </ul>
        </div>
    )
}

export default sidebar;