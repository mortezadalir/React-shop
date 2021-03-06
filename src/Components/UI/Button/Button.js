import React from 'react';
import classes from './Button.css'


const button = (props) =>{
    console.log(props.btnType);
    return(
        <div >
            <button  className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.shoped} >{props.children}</button>
        </div>
    )
}

export default button;