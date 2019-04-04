import React from 'react'
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media screen and (min-width: 500px)': {
            width: '450px',
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.clickEvent}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeParam} value={props.name}/>
        </div>
    );
}

export default Radium(person);