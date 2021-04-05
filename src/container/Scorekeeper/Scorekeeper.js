import React, { Component } from 'react'
import ScoreBoard from "../../component/ScoreBoard/ScoreBoard";
import Player from "../../component/Player/Player";
import GameCondition from "../../component/GameCondition/gameCondition";
import * as gameAction from "../../Store/reducer/reducer"
import { connect } from "react-redux";
import "./Scorekeeper.css"


class ScoreKeeper extends Component {
    componentDidMount(){
        this.props.onInitailizing();
    }

    render() {
        const breakup =
            <div className = "ScoreKeeper">
                <ScoreBoard score1={this.props.score1} score2={this.props.score2} play={this.props.game} />

                <GameCondition inputHandler={this.props.inputPlayChangeHandler} play={this.props.game} />
                
                <Player disabled={this.props.disabled} 
                 score1={this.props.score1}
                 score2={this.props.score2}
                 play={this.props.game} 
                 score1Handler={this.props.scoreChangePlayer1Handler} 
                score2Handler={this.props.scoreChangePlayer2Handler} 
                resetHandler={this.props.onresetHandler} />
            </div>
        return (
            <div>
                <h1>ScoreKeeper Game</h1>
                {breakup}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        score1: state.reducer.score1,
        score2: state.reducer.score2,
        game: state.reducer.game,
        disabled: state.reducer.disabled
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInitailizing : ()=>{dispatch(gameAction.initilizeHandler())},
        inputPlayChangeHandler: (event) => { dispatch(gameAction.gameHandler(event)) },
        scoreChangePlayer1Handler: () => { dispatch(gameAction.score1Handler()) },
        scoreChangePlayer2Handler: () => { dispatch(gameAction.score2Handler()) },
        onresetHandler: () => {dispatch(gameAction.resetHandler())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScoreKeeper);
