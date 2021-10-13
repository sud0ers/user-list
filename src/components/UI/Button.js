import React from 'react';
import classes from './Button.module.css';

function Button(props) {
    return (
        <button className={classes.Button} 
        type = {props.type || 'button'} 
        onclick={props.onClick}>
        {props.children}
        </button>
    );
}

export default Button;