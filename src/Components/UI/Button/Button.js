import React from 'react';



const button = (props) =>{
    return(
        <div>
            <button onClick={props.shoped} style={{backgroundColor: "red",border: 'none'}}>{props.children}</button>
        </div>
    )
}

export default button;