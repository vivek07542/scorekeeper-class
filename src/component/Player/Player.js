import React from 'react'

const Player = (props) => {
    return (
        <div>
            <button disabled={props.score1 === props.play || props.score2 === props.play  ? true : false} onClick={props.score1Handler}>Player1</button>
            <button disabled={props.score2 === props.play || props.score1 === props.play ? true : false} onClick={props.score2Handler}>Player2</button>
            <button onClick={props.resetHandler}>Reset</button>
        </div>
    )
}

export default Player
