import React, { Component } from 'react'
import ScoreBoard from "../../component/ScoreBoard/ScoreBoard";
import Player from "../../component/Player/Player";
import GameCondition from "../../component/GameCondition/gameCondition";
import * as gameAction from "../../Store/reducer/reducer"
import {connect} from "react-redux";


class ScoreKeeper extends Component {

    constructor(props){
        super(props);
        this.state = {
          game:{
            score1 : 0,
            score2: 0,
            playgame:5,
            disabled : false
          }
        }
    };
    componentDidMount(){
        
    }
    inputPlayChangeHandler=(event)=>{
        let playingCondition = {...this.state.game}
        playingCondition = {
            score1:0,
            score2:0,
            playgame:+event.target.value,
            disabled:true
        }
        this.setState({game:playingCondition});
    }

    scoreChangePlayer1Handler=()=>{
        if(this.state.game.score1 === this.state.game.playgame || this.state.game.score2 === this.state.game.playgame ){
            const scoreChange = {...this.state.game};
            scoreChange.disabled = true;
            this.setState({game:scoreChange});
        }
        else{
            const scoreChange = {...this.state.game};
            scoreChange.score1 = this.state.game.score1 +1;
            this.setState({game:scoreChange});
        }
    }

    scoreChangePlayer2Handler=()=>{
        if(this.state.game.score2 === this.state.game.playgame || this.state.game.score1 === this.state.game.playgame){
            const scoreChange = {...this.state.game};
            scoreChange.disabled = true;
            this.setState({game:scoreChange});
        }
        else{
            const scoreChange = {...this.state.game};
            scoreChange.score2 = this.state.game.score2 +1;
            this.setState({game:scoreChange});
        }
    }
    
    resetHandler=()=>{
        let resetValue = {...this.state.game}
        resetValue = {
            score1:0,
            score2:0,
            playgame:5,
            disabled:false
        } 
        this.setState({game:resetValue});
    }
    render() {
        const breakup = 
            <div className={this.props.class}>
                <ScoreBoard score1 = {this.state.game.score1} score2 = {this.state.game.score2} play={this.state.game.playgame}/>
                <GameCondition inputHandler={this.inputPlayChangeHandler} play={this.state.game.playgame}/>
                <Player disabled={this.state.disabled} score1Handler={this.scoreChangePlayer1Handler} score2Handler={this.scoreChangePlayer2Handler} resetHandler={this.resetHandler}/>
            </div>   
        return (
            <div>
                {breakup}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        inputPlayChangeHandler : (event) =>{dispatch(gameAction.inputHandler(event))}, 
        scoreChangePlayer1Handler : () =>{dispatch(gameAction.score1Handler())},
        scoreChangePlayer2Handler : () =>{dispatch(gameAction.score2Handler())}
    }
}
export default connect(null,mapDispatchToProps)(ScoreKeeper);
