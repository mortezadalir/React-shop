import React from 'react';
import classes from './Sidebar.css'

const sidebar= () =>{
    return(
        <div className={classes.Sidebar}>
            <ul>
                <li>foods and dairy</li>
                <li>fruits and vegtables</li>
                <li>beverage</li>
                <li>household and cleanings</li>
            </ul>
        </div>
    )
}

export default sidebar;