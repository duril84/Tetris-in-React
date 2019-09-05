import React, { Component } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";



class Buttons extends Component {
 
  render() {
    const pause = this.props.pause;
    //console.log(pause);
    return (
      <div className="buttons">
        <div className="buttons top-section">
          <div className="description">
            <h1>START</h1>
            {!pause && <Button className="button options" buttonFN={this.newGame}><FontAwesomeIcon icon="star" /></Button>}
          </div>
          <div className="description">
            <h1>RESULTS</h1>
            <NavLink exact to={`/options`}>
              <Button className="button options" ><FontAwesomeIcon icon="bars" /></Button>
            </NavLink>
          </div>
          <div className="description">
            <h1 onClick={this.onToggle} >SOUND</h1>
            <Button className="button options" buttonFN={ !this.isOver() && !this.isPaused() &&  this.soundToggle}><FontAwesomeIcon icon="volume-mute" /></Button>
          </div>
          <div className="description">
            <h1>PAUSE</h1>
            <Button className="button options" buttonFN={ !this.isOver() &&  this.pauseGame}>
              { !this.isPaused() ? <FontAwesomeIcon icon="pause" /> :  <FontAwesomeIcon icon="play" />}
            </Button>
          </div>
        </div>
        <div className="buttons bottom-section">
          <div className="left-section">
            <div className="move-left-right">
              <Button className="button small" buttonFN={!this.isPaused() && this.moveTetromino} code={37}><FontAwesomeIcon icon="arrow-left" /></Button>
              <Button className="button small" buttonFN={!this.isPaused() && this.moveTetromino} code={39}><FontAwesomeIcon icon="arrow-right" /></Button>
            </div>
            <div className="move-down">
              <Button className="button small" buttonFN={!this.isPaused() && this.moveTetromino} code={40}><FontAwesomeIcon icon="arrow-down" /></Button>
            </div>
          </div>
          <div className="right-section">
            <Button className="button big" buttonFN={!this.isPaused() && this.moveTetromino} code={38}><FontAwesomeIcon icon="redo" /></Button>
          </div>
        </div>
      </div>
    );
  }
  soundToggle = e => {
    if ( typeof this.props.soundToggle === 'function' ) {
      this.props.soundToggle(e);
    }
  }
  newGame = e => {
    if ( typeof this.props.newGame === 'function' ) {
      this.props.newGame(e);
    }
  }
  moveTetromino = e => {
    if ( typeof this.props.moveTetromino === 'function' ) {
      this.props.moveTetromino(e);
    }
  }
  pauseGame = e => {
    if ( typeof this.props.pauseGame === 'function' ) {
      this.props.pauseGame(e);
    }
  }
  isPaused = e => {
    if ( typeof this.props.isPaused === 'function' ) {
      return this.props.isPaused(e);
    }
  }
  isOver= e => {
    if ( typeof this.props.isOver === 'function' ) {
      return this.props.isOver(e);
    }
  }
}
 
export default Buttons;
