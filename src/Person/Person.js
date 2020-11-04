import React from 'react'
import './Person.css'

const person = (props)=>{
    return(
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} a {props.age} year old Person!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default person;