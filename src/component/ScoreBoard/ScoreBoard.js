import React from 'react'

const ScoreBoard = (props) => {
    return (
        <div>
             <h1><span style={props.score1===props.play ? {color : "green"} : null}>{props.score1}</span> To <span style={props.score2===props.play ? {color : "green"} : null}>{props.score2}</span></h1>
        </div>
    )
}

export default ScoreBoard

