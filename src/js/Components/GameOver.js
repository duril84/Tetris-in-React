import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class GameOver extends Component {
  state = {  }
  render() { 
    const { points } = this.props;
    return (
      <div className="game-over">
        <div className="title">GAME OVER</div>
        <div className="question">Add result ?</div>
        <div className="points">{points} points</div>
        <div className="buttons-container">
        { points > 0 ? (
            <>
              <NavLink exact to={`/addResult/${points}`}>
                <div>Yes</div>
              </NavLink>
              <div className="answerNO" onClick={e=>this.newGame(e)} >
                <div>No</div>
                <div>New Game</div>
              </div> 
            </>
          ) :  <div onClick={e=>this.newGame(e)} >New Game</div> }
        </div>
      </div>
    );
  }

  newGame = e => {
    if ( typeof this.props.newGame === 'function' ) {
      this.props.newGame(e);
    }
  }

}
 
export default GameOver;