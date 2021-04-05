import React from 'react'

const gameCondition = (props) => {
    return (
        <div>
             <p>Playing To : {props.play} </p>
             <input type="number" onChange={props.inputHandler} value={props.play}/>
        </div>
    )
}
export default gameCondition;