import React from 'react'
import classes from './Person.css'

const person = (props) => {
    console.log('[Person.js] rendering...');

    return (
        <div className={classes.Person}>
            <p onClick={props.clickEvent}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeParam} value={props.name}/>
        </div>
    );
}

export default person;